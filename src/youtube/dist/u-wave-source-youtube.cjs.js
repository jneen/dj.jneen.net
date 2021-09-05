'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var parseIsoDuration = _interopDefault(require('parse-iso-duration'));
var getArtistTitle = _interopDefault(require('get-artist-title'));
var getYouTubeID = _interopDefault(require('get-youtube-id'));
var chunk = _interopDefault(require('chunk'));
var fetch = _interopDefault(require('node-fetch'));
var qsStringify = _interopDefault(require('qs-stringify'));

const rxSimplePlaylistUrl = /youtube\.com\/(?:playlist|watch)\?.*?list=([a-z0-9_-]+)/i;
const rxPlaylistID = /^([a-z0-9_-]+)$/i;
/**
 * Extract a playlist ID from a playlist URL.
 */

function getPlaylistID(url) {
  if (rxPlaylistID.test(url)) {
    return url;
  }

  const match = url.match(rxSimplePlaylistUrl);

  if (match) {
    return match[1];
  }

  return null;
}

function parseYouTubeDuration(duration) {
  return Math.round(parseIsoDuration(duration) / 1000);
}
/**
 * Get the highest quality available thumbnail for a video or playlist.
 */


function getBestThumbnail(thumbnails) {
  if (thumbnails) {
    if (thumbnails.high) {
      return thumbnails.high.url;
    } else if (thumbnails.medium) {
      return thumbnails.medium.url;
    } else if (thumbnails.default) {
      return thumbnails.default.url;
    }
  }

  return '';
}

function getBlockedCountryCodes(contentDetails) {
  if (contentDetails.regionRestriction) {
    return contentDetails.regionRestriction.blocked || [];
  }

  return [];
}
/**
 * Convert a YouTube Video resource to a üWave media object.
 */


function normalizeMedia(video) {
  const [artist, title] = getArtistTitle(video.snippet.title, {
    defaultArtist: video.snippet.channelTitle
  });
  return {
    sourceID: video.id,
    // TODO Fix the detection in get-artist-title so that it doesn't split the
    // title into parts with only fluff.
    artist: artist || '[unknown]',
    title: title || '[unknown]',
    duration: parseYouTubeDuration(video.contentDetails.duration),
    thumbnail: getBestThumbnail(video.snippet.thumbnails),
    sourceData: {
      // Can be used by clients to determine the aspect ratio.
      embedWidth: video.player ? parseInt(video.player.embedWidth, 10) : null,
      embedHeight: video.player ? parseInt(video.player.embedHeight, 10) : null,
      blockedIn: getBlockedCountryCodes(video.contentDetails)
    }
  };
}

async function getVideosPage(client, sourceIDs) {
  const data = await client.listVideos({
    part: 'snippet,contentDetails,player',
    fields: `
      items(
        id,
        snippet(title, channelTitle, thumbnails),
        contentDetails(duration, regionRestriction),
        player(embedWidth, embedHeight)
      )
    `.replace(/\s+/g, ''),
    id: sourceIDs.join(','),
    // These are the maximum acceptable values, we only send them to force
    // YouTube to send an embedWidth and embedHeight back so we can calculate
    // the video aspect ratio.
    maxWidth: 8192,
    maxHeight: 8192
  });
  return data.items.map(normalizeMedia).filter(item => item.duration > 0);
}
/**
 * Fetch Video resources from the YouTube Data API.
 */


async function getVideos(client, sourceIDs) {
  const ids = sourceIDs.map(id => getYouTubeID(id) || id);
  const pages = await Promise.all(chunk(ids, 50).map(page => getVideosPage(client, page)));
  return pages.reduce((result, page) => result.concat(page), []);
}

/**
 * A small YouTube Data API client.
 */

class YouTubeClient {
  constructor(params) {
    this.params = params;
    this.baseUrl = 'https://www.googleapis.com/youtube/v3';
  }

  async get(resource, options) {
    const query = qsStringify({ ...this.params,
      ...options
    });
    const response = await fetch(`${this.baseUrl}/${resource}?${query}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    return data;
  }

  search(options) {
    return this.get('search', options);
  }

  listVideos(options) {
    return this.get('videos', options);
  }

  listPlaylistItems(options) {
    return this.get('playlistItems', options);
  }

  listPlaylists(options) {
    return this.get('playlists', options);
  }

  listChannels(options) {
    return this.get('channels', options);
  }

}

const rxChannelUrl = /youtube\.com\/channel\/([^/?#]+)/i;
const rxUserUrl = /youtube\.com\/user\/([^/?#]+)/i;
const getPlaylistsOptions = {
  part: 'snippet,contentDetails',
  fields: `
    items(
      id,
      snippet/title,
      snippet/description,
      snippet/channelTitle,
      snippet/thumbnails,
      contentDetails/itemCount
    ),
    pageInfo,
    nextPageToken
  `.replace(/\s+/g, ''),
  maxResults: 50
};
class YouTubeImport {
  constructor(client) {
    this.client = client;
  }

  async getPlaylistPage(playlistID, page = null) {
    const data = await this.client.listPlaylistItems({
      part: 'contentDetails',
      playlistId: playlistID,
      maxResults: 50,
      pageToken: page
    });
    return {
      nextPage: data.nextPageToken,
      items: data.items
    };
  }

  async getPlaylistItems(playlistID) {
    let page = null;
    const playlistItems = [];

    try {
      do {
        // This `await` is OK since we need to fetch this page to find out how
        // to fetch the next.
        // eslint-disable-next-line no-await-in-loop
        const res = await this.getPlaylistPage(playlistID, page);
        page = res.nextPage;
        playlistItems.push(...res.items);
      } while (page);
    } catch (e) {
      throw new Error('That playlist could not be imported. If it\'s a private playlist, ' + 'change its visibility to Unlisted and try again.');
    }

    const ids = playlistItems.map(item => item.contentDetails.videoId);
    const medias = await getVideos(this.client, ids);
    return medias.map(media => ({ ...media,
      start: 0,
      end: media.duration
    }));
  }

  async getPlaylistMeta(playlistID) {
    const data = await this.client.listPlaylists({
      part: 'snippet',
      fields: 'items(id,snippet/title)',
      id: playlistID,
      maxResults: 1
    });
    return data.items[0];
  }

  async getImportablePlaylist(url) {
    const playlistID = getPlaylistID(url);

    if (!playlistID) {
      throw new Error('Invalid playlist URL. Please provide a direct link to the playlist ' + 'you want to import.');
    }

    const playlist = await this.getPlaylistMeta(playlistID);
    const items = await this.getPlaylistItems(playlistID);
    return {
      playlist: {
        sourceID: playlist.id,
        name: playlist.snippet.title
      },
      items
    };
  }

  async getChannelMeta(url) {
    let match = url.match(rxChannelUrl);
    const request = {
      part: 'snippet,contentDetails',
      fields: `
        items(
          id,
          snippet/title,
          contentDetails/relatedPlaylists/favorites,
          contentDetails/relatedPlaylists/uploads
        )
      `.replace(/\s+/g, ''),
      maxResults: 1
    };

    if (match) {
      request.id = match[1]; // eslint-disable-line prefer-destructuring
    } else {
      match = url.match(rxUserUrl);

      if (match) {
        request.forUsername = match[1]; // eslint-disable-line prefer-destructuring
      } else {
        throw new Error('Invalid channel URL. Please provide a direct link to the channel or ' + 'user you want to import playlists from.');
      }
    }

    const data = await this.client.listChannels(request);

    if (data.items.length > 1) {
      throw new Error('That channel could not be found. Please check that you provided the ' + 'full URL to the channel.');
    }

    const channel = data.items[0];
    return {
      id: channel.id,
      title: channel.snippet.title,
      playlists: channel.contentDetails.relatedPlaylists
    };
  }

  async getChannelPlaylistsPage(channelID, page = null) {
    const data = await this.client.listPlaylists({ ...getPlaylistsOptions,
      channelId: channelID,
      pageToken: page
    });
    return {
      nextPage: data.nextPageToken,
      items: data.items
    };
  }

  async getChannelPlaylists(channelID) {
    const playlists = [];
    let page;

    do {
      // This `await` is OK since we need to fetch this page to find out how
      // to fetch the next.
      // eslint-disable-next-line no-await-in-loop
      const res = await this.getChannelPlaylistsPage(channelID, page);
      page = res.nextPage;
      playlists.push(...res.items);
    } while (page);

    return playlists;
  }

  async getSpecialChannelPlaylists(channel) {
    const data = await this.client.listPlaylists({ ...getPlaylistsOptions,
      id: Object.values(channel.playlists).join(',')
    });
    return data.items;
  }

  async getPlaylistMetasForUser(url) {
    const channel = await this.getChannelMeta(url);
    const specials = this.getSpecialChannelPlaylists(channel);
    const playlists = this.getChannelPlaylists(channel.id);
    const result = await Promise.all([specials, playlists]);
    const allPlaylists = result[0].concat(result[1]);
    return {
      channel: {
        id: channel.id,
        title: channel.title
      },
      playlists: allPlaylists.map(item => ({
        sourceID: item.id,
        sourceChannel: item.snippet.channelTitle,
        name: item.snippet.title,
        description: item.snippet.description,
        size: item.contentDetails.itemCount,
        thumbnail: getBestThumbnail(item.snippet.thumbnails)
      }))
    };
  }

}

const defaultSearchOptions = {
  part: 'id,snippet',
  fields: `
    items(id/videoId, snippet/liveBroadcastContent),
    pageInfo,
    nextPageToken,
    prevPageToken
  `.replace(/\s+/g, ''),
  type: 'video',
  maxResults: 50,
  safeSearch: 'none',
  videoSyndicated: true
};
function youTubeSource(uw, opts = {}) {
  if (!opts.key) {
    throw new TypeError('Expected a YouTube API key in "options.key". For information on how to ' + 'configure your YouTube API access, see ' + 'https://developers.google.com/youtube/v3/getting-started.');
  }

  const params = opts.key ? {
    key: opts.key
  } : {};
  const searchOptions = opts.search || {};
  const client = new YouTubeClient(params);
  const importer = new YouTubeImport(client);

  function get(sourceIDs) {
    return getVideos(client, sourceIDs);
  }

  async function search(query, page = null) {
    // When searching for a video URL, we want to search for the video ID
    // only, because search results are very inconsistent with some types of
    // URLs.
    const id = getYouTubeID(query, {
      fuzzy: false
    });
    const data = await client.search({ ...defaultSearchOptions,
      ...searchOptions,
      q: id ? `"${id}"` : query,
      pageToken: page
    });

    const isVideo = item => item.id && item.id.videoId;

    const isBroadcast = item => item.snippet && item.snippet.liveBroadcastContent !== 'none';

    return get(data.items.filter(item => isVideo(item) && !isBroadcast(item)).map(item => item.id.videoId));
  }

  async function doImport(ctx, name, playlistID) {
    const items = await importer.getPlaylistItems(playlistID);
    return ctx.createPlaylist(name, items);
  }

  return {
    name: 'youtube',
    search,
    get: get,
    // eslint-disable-line object-shorthand
    import: async (ctx, action) => {
      if (action.action === 'channel') {
        return importer.getPlaylistMetasForUser(action.url);
      }

      if (action.action === 'playlist') {
        const importable = await importer.getImportablePlaylist(action.url);
        importable.items = ctx.source.addSourceType(importable.items);
        return importable;
      }

      if (action.action === 'importplaylist') {
        return doImport(ctx, action.name, action.id);
      }

      throw new TypeError(`Unknown action "${action}"`);
    }
  };
}

exports.default = youTubeSource;
//# sourceMappingURL=u-wave-source-youtube.cjs.js.map
