const got = require('got');
const getArtistTitle = require('get-artist-title');

const API_URL = 'https://api.soundcloud.com';
const PAGE_SIZE = 50;

const CACHE_KEY = 'soundcloud:media-cache';

function enlargeThumbnail(thumbnail) {
  // Use larger thumbnail images:
  // -large is 100x100, -crop is 400x400.
  return thumbnail ? thumbnail.replace('-large.', '-crop.') : null;
}

function getThumbnailUrl(item) {
  const thumbnail = item.artwork_url || (item.user && item.user.avatar_url);

  return enlargeThumbnail(thumbnail);
}

function normalizeMedia(media) {
  const [artist, title] = getArtistTitle(media.title, {
    defaultArtist: media.user.username,
  });

  const streamUrl = media.stream_url || `https://api.soundcloud.com/tracks/${media.id}/stream`;

  const sourceData = {
    fullTitle: media.title,
    permalinkUrl: media.permalink_url,
    streamUrl,
    artistUrl: media.user.permalink_url,
    username: media.user.username,
  };
  return {
    sourceID: `${media.id}`,
    sourceData,
    artist,
    title,
    duration: Math.round(parseInt(media.duration / 1000, 10)),
    thumbnail: getThumbnailUrl(media),
    restricted: [],
  };
}

module.exports = function soundCloudSource(uw, opts = {}) {
  const params = { client_id: opts.key };

  async function resolve(url) {
    console.log(`====== resolve ${url} ======`);
    const response = await got(url);
    const body = response.body;

    const match = body.match(/<script>window.__sc_hydration = (.*?);<\/script>/m)
    if (!match) return [];

    const hydrations = JSON.parse(match[1]);
    const sounds = hydrations.filter(el => el.hydratable === 'sound');
    const media = sounds.map(s => normalizeMedia(s.data));

    const cache = {};
    media.forEach(m => { cache[m.sourceID] = JSON.stringify(m); })
    console.log('hmset', CACHE_KEY, cache);
    uw.redis.hmset(CACHE_KEY, cache);

    return media;
  }

  function sortSourceIDsAndURLs(list) {
    const urls = [];
    const sourceIDs = [];
    list.forEach((item) => {
      if (/^https?:/.test(item)) {
        urls.push(item);
      } else {
        sourceIDs.push(`${item}`);
      }
    });
    return { urls, sourceIDs };
  }

  async function get(sourceIDsAndURLs) {
    const { urls, sourceIDs } = sortSourceIDsAndURLs(sourceIDsAndURLs);

    // Use the `/resolve` endpoint when items are added by their URL.
    const urlsPromise = Promise.all(urls.flatMap(resolve));
    console.log('hmget', CACHE_KEY, sourceIDs);
    const sourceIDsPromise = uw.redis.hmget(CACHE_KEY, sourceIDs);

    const [urlItems, sourceIDItems] = await Promise.all([urlsPromise, sourceIDsPromise]);
    console.log('items', sourceIDItems);

    // Ensure the results order is the same as the sourceIDs parameter order.
    // TODO deal with nonexistant source IDs
    const items = {};
    urls.forEach((url, index) => {
      const item = urlItems[index];
      items[url] = item;
    });
    sourceIDItems.flatMap(x => x).forEach((sound) => {
      const item = JSON.parse(sound);
      items[item.sourceID] = item;
    });
    return sourceIDsAndURLs.map(input => items[input]);
  }

  async function search(query, offset = 0) {
    if (/^https?:\/\/(api\.)?soundcloud\.com\//.test(query)) {
      return await resolve(query);
    }
    const response = await got(`${API_URL}/tracks`, {
      json: true,
      query: {
        ...params,
        offset,
        q: query,
        limit: PAGE_SIZE,
      },
    });

    return response.body.map(normalizeMedia);
  }

  return {
    name: 'soundcloud',
    search,
    get,
  };
}
