require('source-map-support').install();
const path = require('path');
const { readdirSync } = require('fs');
const gitRev = require('git-rev-sync');
const compression = require('compression');
const serveStatic = require('serve-static');
const express = require('express');
// const Bugsnag = require('bugsnag');
const md5 = require('md5-hex');
const uwave = require('./src/core');
const { createHttpApi, createSocketServer } = require('./src/http');
const createWebClient = require('./src/middleware');
// const emojione = require('u-wave-web-emojione');
// const waitlistRoulette = require('@wlk/u-wave-random-playlists');
// const announce = require('u-wave-announce');
const ytSource = require('./src/youtube');
const scSource = require('./src/soundcloud');

const configPath = process.argv[2] || './config';
const config = require(path.resolve(process.cwd(), configPath));
const searchOverride = require('./searchOverride')

const uw = uwave({
  redis: config.redis,
  mongo: config.mongo,
});

console.log('uw', uw.playlists.movePlaylistItems);

// jneen hack. mongo requires a copy here or it blows up
uw.playlists.movePlaylistItems = async function(playlistOrID, itemIDs, { afterID }) {
  const playlist = await this.getPlaylist(playlistOrID); // First remove the given items,

  let newMedia = []

  // [jneen] dumb copy
  playlist.media.forEach(x => { newMedia.push(x) });

  newMedia = newMedia.filter(item => itemIDs.indexOf(`${item}`) === -1); // then reinsert them at their new position.

  const insertIndex = newMedia.findIndex(item => `${item}` === afterID);
  newMedia.splice(insertIndex + 1, 0, ...itemIDs);
  playlist.media = newMedia;
  await playlist.save();
  return {};
}

const indexed = {}
searchOverride.forEach(x => { indexed[x.sourceID] = x });

uw.source(scSource(uw, {
  name: 'soundcloud',
  search: () => searchOverride,
  get: (input) => {
    return input.map(x => indexed[x])
  }
}));

uw.source(ytSource, {
  key: config.youtube.key,
  search: {
    videoSyndicated: 'any',
  },
});

const app = express();
const server = app.listen(config.port);

app.use(compression());

app.use(serveStatic('./public'));

const httpApi = createHttpApi(uw, {
  secret: config.secret,
  mailTransport: config.mailTransport,
  createPasswordResetEmail: config.createPasswordResetEmail,
  //recaptcha: config.recaptcha,
  onError(req, error) {
    console.warn("ERROR", error, error.stack);

    // Bugsnag.notify(error, {
    //   severity: error.status && error.status >= 500 && error.status < 600
    //     ? 'error'
    //     : 'warning',
    //   user: req.user ? {
    //     id: req.user.id,
    //     name: req.user.username,
    //   } : {
    //     // Pseudonymise so we can still track if it's a single user having
    //     // this issue or many.
    //     id: md5(req.ip).slice(0, 7),
    //   },
    //   context: `api: ${req.url}`,
    // });
  },
});
app.use('/v1', httpApi);
// https://github.com/u-wave/web/issues/1068
app.use('/api', httpApi);

createSocketServer(uw, {
  server,
  secret: config.secret,
});

app.use(createWebClient({
  basePath: './public',
  apiUrl: '/v1',
  title: config.title,
  recaptcha: config.recaptcha && { key: config.recaptcha.key },
}));

// app.use(Bugsnag.errorHandler);

