const mongoose = require('mongoose');
const { slugify } = require('transliteration');

const Page = require('../Page');

const { Schema } = mongoose;
const { Types } = mongoose.Schema;

module.exports = function userModel() {
  return (uw) => {
    const bannedSchema = new Schema({
      moderator: { type: Types.ObjectId, ref: 'User', index: true },
      duration: { type: Number, required: true },
      expiresAt: { type: Date, required: true, index: true },
      reason: { type: String, default: '' },
    });

    const userSchema = new Schema({
      username: {
        type: String,
        minlength: [3, 'Usernames have to be at least 3 characters long.'],
        maxlength: [32, 'Usernames can be at most 32 characters long.'],
        match: [/^[^\s]+$/, 'Usernames can\'t contain spaces.'],
        required: true,
        unique: true,
        index: true,
        set: name => name.normalize('NFKC'),
      },
      language: {
        type: String, min: 2, max: 2, default: 'en',
      },
      roles: [{ type: String, ref: 'AclRole' }],
      // Deprecated, `roles` should be used instead.
      // However some clients (*cough* u-wave-web *cough*) haven't updated to the
      // ACL system so they need this key to exist.
      role: { type: Number, min: 0, default: 0 },
      avatar: {
        type: String, min: 0, max: 256, default: '',
      },
      slug: {
        type: String,
        unique: true,
        required: [true, 'Usernames must not consist of punctuation only.'],
        index: true,
      },
      level: {
        type: Number, min: 0, max: 9001, default: 0,
      },
      lastSeenAt: { type: Date, default: Date.now },
      exiled: { type: Boolean, default: false },
      banned: bannedSchema,
    }, {
      timestamps: true,
      minimize: false,
    });

    userSchema.pre('validate', function preValidate(next) {
      this.slug = slugify(this.username);
      next();
    });

    userSchema.loadClass(class User {
      getPermissions() {
        return uw.acl.getAllPermissions(this);
      }

      can(permission) {
        return uw.acl.isAllowed(this, permission);
      }

      allow(permissions) {
        return uw.acl.allow(this, permissions);
      }

      disallow(permissions) {
        return uw.acl.disallow(this, permissions);
      }

      updatePassword(password) {
        return uw.users.updatePassword(this, password);
      }

      getPlaylists() {
        return uw.playlists.getUserPlaylists(this);
      }

      getPlaylist(id) {
        return uw.playlists.getUserPlaylist(this, id);
      }

      getActivePlaylistID() {
        return uw.redis.get(`playlist:${this.id}`);
      }

      async getActivePlaylist() {
        const playlistID = await this.getActivePlaylistID();
        return uw.playlists.getPlaylist(playlistID);
      }

      async setActivePlaylist(id) {
        const playlist = await this.getPlaylist(id);
        await uw.redis.set(`playlist:${this.id}`, playlist.id);
        return this;
      }

      createPlaylist(props) {
        return uw.playlists.createPlaylist(this, props);
      }

      getHistory(pagination = {}) {
        return uw.history.getUserHistory(this, pagination);
      }

      async mute(...args) {
        return uw.chat.mute(this, ...args);
      }

      async unmute(...args) {
        return uw.chat.unmute(this, ...args);
      }

      async isMuted() {
        return uw.chat.isMuted(this);
      }

      isBanned() {
        return uw.bans.isBanned(this);
      }
    });

    uw.mongo.model('User', userSchema);
  };
}
