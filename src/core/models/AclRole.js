const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = function aclRoleModel() {
  const schema = new Schema({
    _id: String,
    roles: [{ type: String, ref: 'AclRole', index: true }],
  }, {
    collection: 'acl_roles',
    idKey: 'name',
    minimize: true,
  });

  return (uw) => {
    uw.mongo.model('AclRole', schema);
  };
}
