const EventEmitter = require('events');
const mongoose = require('mongoose');
const Redis = require('ioredis');
const debug = require('debug');
const { values, isPlainObject } = require('lodash');

const Source = require('./Source');
const Page = require('./Page');

const models = require('./models');
const booth = require('./plugins/booth');
const chat = require('./plugins/chat');
const motd = require('./plugins/motd');
const playlists = require('./plugins/playlists');
const users = require('./plugins/users');
const bans = require('./plugins/bans');
const history = require('./plugins/history');
const acl = require('./plugins/acl');
const waitlist = require('./plugins/waitlist');

mongoose.Promise = Promise;
const MongooseConnection = mongoose.Connection;

const kSources = Symbol('Media sources');

module.exports = class UWaveServer extends EventEmitter {
  [kSources] = {};

  options = {
    useDefaultPlugins: true,
  };

  /**
  * Registers middleware on a route
  *
  * @constructor
  * @param {Object} options
  */
  constructor(options = {}) {
    super();
    this.parseOptions(options);

    this.log = debug('uwave:core');
    this.mongoLog = debug('uwave:core:mongo');
    this.redisLog = debug('uwave:core:redis');

    this.attachRedisEvents();
    this.attachMongooseEvents();

    if (this.options.useDefaultPlugins) {
      this.use(models());
      this.use(booth());
      this.use(chat());
      this.use(motd());
      this.use(playlists());
      this.use(users());
      this.use(bans());
      this.use(history());
      this.use(acl());
      this.use(waitlist());
    }

    process.nextTick(() => {
      this.emit('started');
    });
  }

  parseOptions(options) {
    if (Array.isArray(options.mongo)) {
      this.mongo = mongoose.createConnection(...options.mongo);
    } else if (typeof options.mongo === 'string' || isPlainObject(options.mongo)) {
      this.mongo = mongoose.createConnection(options.mongo);
    } else if (options.mongo instanceof MongooseConnection) {
      this.mongo = options.mongo;
    } else {
      this.mongo = mongoose.createConnection('mongodb://localhost:27017/uwave');
    }

    if (typeof options.redis === 'string') {
      this.redis = new Redis(options.redis, { lazyConnect: true });
    } else if (typeof options.redis === 'object') {
      this.redis = new Redis(options.redis.port, options.redis.host, {
        ...options.redis.options,
        lazyConnect: true,
      });
    } else if (options.redis instanceof Redis) {
      this.redis = options.redis;
    } else {
      this.redis = new Redis({ lazyConnect: true });
    }

    Object.assign(this.options, options);
  }

  use(plugin) {
    plugin(this);
    return this;
  }

  model(name) {
    return this.mongo.model(name);
  }

  advance(opts = {}) {
    this.log('advance', opts);
    return this.booth.advance(opts);
  }

  getHistory(pagination = {}) {
    return this.history.getRoomHistory(pagination);
  }

  sendChat(user, message) {
    return this.chat.send(user, message);
  }

  deleteChat(filter = {}, opts = {}) {
    return this.chat.delete(filter, opts);
  }

  getMotd() {
    return this.motd.get();
  }

  setMotd(text) {
    return this.motd.set(text);
  }

  getUsers(filter = null, page = {}) {
    return this.users.getUsers(filter, page);
  }

  getUser(id) {
    return this.users.getUser(id);
  }

  createUser(opts) {
    return this.users.createUser(opts);
  }

  updateUser(user, update, opts = {}) {
    return this.users.updateUser(user, update, opts);
  }

  /**
   * An array of registered sources.
   */
  get sources() {
    return values(this[kSources]);
  }

  /**
   * Get or register a source plugin.
   * If the first parameter is a string, returns an existing source plugin.
   * Else, adds a source plugin and returns its wrapped source plugin.
   *
   * @param sourcePlugin {string|Function|Object} Source name or definition.
   *     When a string: Source type name.
   *     Used to signal where a given media item originated from.
   *     When a function or object: Source plugin or plugin factory.
   * @param opts {Object} Options to pass to the source plugin. Only used if
   *     a source plugin factory was passed to `sourcePlugin`.
   */
  source(sourcePlugin, opts = {}) {
    if (arguments.length === 1 && typeof sourcePlugin === 'string') { // eslint-disable-line prefer-rest-params
      return this[kSources][sourcePlugin];
    }

    const sourceFactory = sourcePlugin.default || sourcePlugin;
    const type = typeof sourceFactory;
    if (type !== 'function' && type !== 'object') {
      throw new TypeError(`Source plugin should be a function, got ${type}`);
    }

    const sourceDefinition = type === 'function'
      ? sourceFactory(this, opts)
      : sourceFactory;
    const sourceType = sourceDefinition.name;
    if (typeof sourceType !== 'string') {
      throw new TypeError('Source plugin does not specify a name. It may be incompatible with this version of ??Wave.');
    }
    const newSource = new Source(this, sourceType, sourceDefinition);

    this[kSources][sourceType] = newSource;

    return newSource;
  }

  attachRedisEvents() {
    this.redis.on('error', (e) => {
      this.emit('redisError', e);
    });
    this.redis.on('reconnecting', () => this.redisLog('trying to reconnect...'));

    this.redis.on('end', () => {
      this.redisLog('disconnected');
      this.emit('redisDisconnect');
    });

    this.redis.on('connect', () => {
      this.redisLog('connected');
      this.emit('redisConnect');
    });
  }

  attachMongooseEvents() {
    this.mongo.on('error', (e) => {
      this.mongoLog(e);
      this.emit('mongoError', e);
    });

    this.mongo.on('reconnected', () => {
      this.mongoLog('reconnected');
      this.emit('mongoReconnect');
    });

    this.mongo.on('disconnected', () => {
      this.mongoLog('disconnected');
      this.emit('mongoDisconnect');
    });

    this.mongo.on('connected', () => {
      this.mongoLog('connected');
      this.emit('mongoConnect');
    });
  }

  /**
   * Create a Redis subscription to the ??Wave channel.
   *
   * @return {IORedis} Redis instance, subscribed to the ??Wave channel.
   */
  subscription() {
    const sub = this.redis.duplicate();
    sub.subscribe('uwave');
    this.on('stop', () => {
      sub.end();
    });
    return sub;
  }

  /**
   * Publish an event to the ??Wave channel.
   */
  publish(command, data) {
    this.redis.publish('uwave', JSON.stringify({
      command, data,
    }));
    return this;
  }

  /**
   * Stop this ??Wave instance.
   */
  async stop() {
    this.emit('stop');

    this.log('stopping ??Wave...');

    await Promise.all([
      this.redis.quit(),
      this.mongo.close(),
    ]);

    this.emit('stopped');
  }
}
