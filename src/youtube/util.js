const parseIsoDuration = require('parse-iso-duration');
const getArtistTitle = require('get-artist-title');
const getYouTubeID = require('get-youtube-id');
const chunk = require('chunk');

const rxSimplePlaylistUrl = /youtube\.com\/(?:playlist|watch)\?.*?list=([a-z0-9_-]+)/i;
const rxPlaylistID = /^([a-z0-9_-]+)$/i;

/**
 * Extract a playlist ID from a playlist URL.
 */
const getPlaylistID = exports.getPlaylistID = function getPlaylistID(url) {
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
const getBestThumbnail = exports.getBestThumbnail = function getBestThumbnail(thumbnails) {
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
const normalizeMedia = exports.normalizeMedia = function normalizeMedia(video) {
  const [artist, title] = getArtistTitle(video.snippet.title, {
    defaultArtist: video.snippet.channelTitle,
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
      blockedIn: getBlockedCountryCodes(video.contentDetails),
    },
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
    maxHeight: 8192,
  });

  return data.items.map(normalizeMedia).filter(item => item.duration > 0);
}

/**
 * Fetch Video resources from the YouTube Data API.
 */
const getVideos = exports.getVideos = async function getVideos(client, sourceIDs) {
  const ids = sourceIDs.map(id => getYouTubeID(id) || id);

  const pages = await Promise.all(chunk(ids, 50).map(page => getVideosPage(client, page)));
  return pages.reduce((result, page) => result.concat(page), []);
}
