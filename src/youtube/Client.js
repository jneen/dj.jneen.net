const fetch = require('node-fetch');
const qsStringify = require('qs-stringify');

/**
 * A small YouTube Data API client.
 */
module.exports = class YouTubeClient {
  constructor(params) {
    this.params = params;
    this.baseUrl = 'https://www.googleapis.com/youtube/v3';
  }

  async get(resource, options) {
    console.log("YOUTUBE GET", resource, options);
    const query = qsStringify({ ...this.params, ...options });
    console.log("FETCH", `${this.baseUrl}/${resource}?${query}`);

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
