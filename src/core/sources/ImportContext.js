const SourceContext = require('./SourceContext');

/**
 * Wrapper around playlist functions for use with import plugins. Intended to be
 * temporary until more data manipulation stuff is moved into core from api-v1.
 *
 * This is legacy, media sources should use the methods provided by the
 * `playlists` plugin instead.
 */
module.exports = class ImportContext extends SourceContext {
  /**
   * Create a playlist for the current user.
   *
   * @param {String} name Playlist name.
   * @param {Object|Array} itemOrItems Playlist items.
   * @return Playlist model.
   */
  async createPlaylist(name, itemOrItems) {
    const playlist = await this.uw.playlists.createPlaylist(this.user, { name });

    const rawItems = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
    const items = this.source.addSourceType(rawItems);

    if (items.length > 0) {
      await playlist.addItems(items);
    }

    return playlist;
  }
}
