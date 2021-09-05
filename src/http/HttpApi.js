const Router = require('router');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const url = require('url');

// routes
const authenticate = require('./routes/authenticate');
const acl = require('./routes/acl');
const bans = require('./routes/bans');
const playlist = require('./routes/playlists');
const waitlist = require('./routes/waitlist');
const search = require('./routes/search');
const booth = require('./routes/booth');
const users = require('./routes/users');
const chat = require('./routes/chat');
const motd = require('./routes/motd');
const now = require('./routes/now');
const imports = require('./routes/import');

// middleware
const addFullUrl = require('./middleware/addFullUrl');
const attachUwaveMeta = require('./middleware/attachUwaveMeta');
const errorHandler = require('./middleware/errorHandler');
const rateLimit = require('./middleware/rateLimit');

const createPassport = require('./passport');
const AuthRegistry = require('./AuthRegistry');

function defaultCreatePasswordResetEmail({ token, requestUrl }) {
  const parsed = url.parse(requestUrl);
  const { hostname } = parsed;
  const webroot = url.format({
    ...parsed,
    pathname: '',
  });
  return {
    from: `noreply@${hostname}`,
    subject: 'üWave Password Reset Request',
    text: `
      Hello,

      To reset your password, please visit:
      ${webroot}/reset/${token}
    `,
  };
}

module.exports = class UwaveHttpApi extends Router {
  constructor(uw, options = {}) {
    if (!uw || !('mongo' in uw)) {
      throw new TypeError('Expected a u-wave-core instance in the first parameter. If you are '
        + 'developing, you may have to upgrade your u-wave-* modules.');
    }

    if (!options.secret) {
      throw new TypeError('"options.secret" is empty. This option is used to sign authentication '
        + 'keys, and is required for security reasons.');
    }

    if (options.recaptcha && !options.recaptcha.secret) {
      throw new TypeError('ReCaptcha validation is enabled, but "options.recaptcha.secret" is '
        + 'not set. Please set "options.recaptcha.secret" to your ReCaptcha '
        + 'secret, or disable ReCaptcha validation by setting "options.recaptcha" '
        + 'to "false".');
    }

    if (options.onError != null && typeof options.onError !== 'function') {
      throw new TypeError('"options.onError" must be a function.');
    }

    const router = super(options);

    this.uw = uw;

    this.authRegistry = new AuthRegistry(uw.redis);

    this.passport = createPassport(uw, {
      secret: options.secret,
      auth: options.auth || {},
    });

    this
      .use(bodyParser.json())
      .use(cookieParser())
      .use(this.passport.initialize())
      .use(addFullUrl())
      .use(this.attachUwaveToRequest())
      .use(this.passport.authenticate('jwt'))
      .use(rateLimit('api-http', { max: 500, duration: 60 * 1000 }));

    this
      .use('/auth', authenticate(this, {
        secret: options.secret,
        mailTransport: options.mailTransport,
        createPasswordResetEmail:
          options.createPasswordResetEmail || defaultCreatePasswordResetEmail,
      }))
      .use('/roles', acl(this))
      .use('/bans', bans(this))
      .use('/booth', booth(this))
      .use('/chat', chat(this))
      .use('/import', imports(this))
      .use('/motd', motd(this))
      .use('/now', now(this))
      .use('/playlists', playlist(this))
      .use('/search', search(this))
      .use('/users', users(this))
      .use('/waitlist', waitlist(this));

    this.use(errorHandler(options));

    return router;
  }

  /**
   * Create middleware to attach the u-wave-core instance and the u-wave-http-api
   * instance to incoming requests. This can be used to access eg. configuration
   * options or session information inside other routes (ones not added by
   * u-wave-http-api).
   *
   * @return {Function} Middleware.
   */
  attachUwaveToRequest() {
    return attachUwaveMeta(this, this.uw);
  }
}
