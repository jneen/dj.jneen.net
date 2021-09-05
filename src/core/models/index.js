const aclRoleModel = require('./AclRole');
const authenticationModel = require('./Authentication');
const historyModel = require('./History');
const mediaModel = require('./Media');
const playlistModel = require('./Playlist');
const playlistItemModel = require('./PlaylistItem');
const userModel = require('./User');

module.exports = function models() {
  return (uw) => {
    uw.use(aclRoleModel());
    uw.use(authenticationModel());
    uw.use(historyModel());
    uw.use(mediaModel());
    uw.use(playlistModel());
    uw.use(playlistItemModel());
    uw.use(userModel());
  };
}
