const createDebug = require('debug');
const { HTTPError } = require('../errors');
const { serializePlaylist } = require('../utils/serialize');
const getOffsetPagination = require('../utils/getOffsetPagination');
const toItemResponse = require('../utils/toItemResponse');
const toListResponse = require('../utils/toListResponse');
const toPaginatedResponse = require('../utils/toPaginatedResponse');

const debug = createDebug('uwave:http:playlists');

const getPlaylists = exports.getPlaylists = async function getPlaylists(req) {
  const playlists = await req.user.getPlaylists();
  return toListResponse(
    playlists.map(serializePlaylist),
    { url: req.fullUrl },
  );
}

const getPlaylist = exports.getPlaylist = async function getPlaylist(req) {
  const playlist = await req.user.getPlaylist(req.params.id);
  return toItemResponse(
    serializePlaylist(playlist),
    { url: req.fullUrl },
  );
}

const createPlaylist = exports.createPlaylist = async function createPlaylist(req) {
  const playlist = await req.user.createPlaylist({
    name: req.body.name,
    description: req.body.description,
    shared: req.body.shared,
  });

  try {
    await req.user.getActivePlaylist();
  } catch (e) {
    debug(`activating first playlist for ${req.user.id} ${req.user.username}`);
    await req.user.setActivePlaylist(playlist);
  }

  return toItemResponse(
    serializePlaylist(playlist),
    { url: req.fullUrl },
  );
}

const deletePlaylist = exports.deletePlaylist = async function deletePlaylist(req) {
  const uw = req.uwave;
  const playlist = await req.user.getPlaylist(req.params.id);

  const result = await uw.playlists.deletePlaylist(playlist);

  return toItemResponse(result, { url: req.fullUrl });
}

const patchableKeys = ['name', 'shared', 'description'];
const updatePlaylist = exports.updatePlaylist = async function updatePlaylist(req) {
  const uw = req.uwave;

  const patches = Object.keys(req.body);
  patches.forEach((patchKey) => {
    if (!patchableKeys.includes(patchKey)) {
      throw new HTTPError(400, `Key "${patchKey}" cannot be updated.`);
    }
  });

  const playlist = await req.user.getPlaylist(req.params.id);

  await uw.playlists.updatePlaylist(playlist, req.body);

  return toItemResponse(
    serializePlaylist(playlist),
    { url: req.fullUrl },
  );
}

const renamePlaylist = exports.renamePlaylist = async function renamePlaylist(req) {
  const uw = req.uwave;
  const playlist = await req.user.getPlaylist(req.params.id);

  await uw.playlists.updatePlaylist(playlist, { name: req.body.name });

  return toItemResponse(
    serializePlaylist(playlist),
    { url: req.fullUrl },
  );
}

const sharePlaylist = exports.sharePlaylist = async function sharePlaylist(req) {
  const uw = req.uwave;
  const playlist = await req.user.getPlaylist(req.params.id);

  await uw.playlists.updatePlaylist(playlist, { shared: req.body.shared });

  return toItemResponse(
    serializePlaylist(playlist),
    { url: req.fullUrl },
  );
}

const activatePlaylist = exports.activatePlaylist = async function activatePlaylist(req) {
  await req.user.setActivePlaylist(req.params.id);

  return toItemResponse({});
}

const getPlaylistItems = exports.getPlaylistItems = async function getPlaylistItems(req) {
  const filter = req.query.filter || null;

  const pagination = getOffsetPagination(req.query);

  const playlist = await req.user.getPlaylist(req.params.id);
  const items = await playlist.getItems(filter, pagination);

  return toPaginatedResponse(items, {
    baseUrl: req.fullUrl,
    included: {
      media: ['media'],
    },
  });
}

const addPlaylistItems = exports.addPlaylistItems = async function addPlaylistItems(req) {
  const { at, after, items } = req.body;
  if (!Array.isArray(items)) {
    throw new HTTPError(422, 'Expected "items" to be an array.');
  }

  const playlist = await req.user.getPlaylist(req.params.id);

  let afterID = after;
  if (at === 'start') {
    afterID = -1;
  } else if (at === 'end') {
    const last = await playlist.getItemAt(playlist.size - 1);
    afterID = last.id;
  }

  const {
    added,
    afterID: finalAfterID,
    playlistSize,
  } = await playlist.addItems(items, { after: afterID });

  return toListResponse(added, {
    included: {
      media: ['media'],
    },
    meta: { afterID: finalAfterID, playlistSize },
  });
}

const removePlaylistItems = exports.removePlaylistItems = async function removePlaylistItems(req) {
  const items = req.query.items || req.body.items;
  if (!Array.isArray(items)) {
    throw new HTTPError(422, 'Expected "items" to be an array');
  }

  const playlist = await req.user.getPlaylist(req.params.id);

  await playlist.removeItems(items);

  return toItemResponse({}, {
    meta: {
      playlistSize: playlist.size,
    },
  });
}

const movePlaylistItems = exports.movePlaylistItems = async function movePlaylistItems(req) {
  const { at, after, items } = req.body;
  if (!Array.isArray(items)) {
    throw new HTTPError(422, 'Expected "items" to be an array');
  }

  const playlist = await req.user.getPlaylist(req.params.id);

  let afterID = after;
  if (at === 'start') {
    afterID = -1;
  } else if (at === 'end') {
    const last = await playlist.getItemAt(playlist.size - 1);
    afterID = last.id;
  }

  const result = await playlist.moveItems(items, { afterID });
  return toItemResponse(result, { url: req.fullUrl });
}

const shufflePlaylistItems = exports.shufflePlaylistItems = async function shufflePlaylistItems(req) {
  const playlist = await req.user.getPlaylist(req.params.id);

  await playlist.shuffle();

  return toItemResponse({});
}

const getPlaylistItem = exports.getPlaylistItem = async function getPlaylistItem(req) {
  const playlist = await req.user.getPlaylist(req.params.id);

  const item = await playlist.getItem(req.params.itemID);

  return toItemResponse(item, { url: req.fullUrl });
}

const updatePlaylistItem = exports.updatePlaylistItem = async function updatePlaylistItem(req) {
  const patch = {
    artist: req.body.artist,
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
  };

  const playlist = await req.user.getPlaylist(req.params.id);

  const item = await playlist.updateItem(req.params.itemID, patch);

  return toItemResponse(item, { url: req.fullUrl });
}

const removePlaylistItem = exports.removePlaylistItem = async function removePlaylistItem(req) {
  const playlist = await req.user.getPlaylist(req.params.id);

  const result = await playlist.removeItem(req.params.itemID);

  return toItemResponse(result, { url: req.fullUrl });
}
