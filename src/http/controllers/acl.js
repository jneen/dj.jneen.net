const toItemResponse = require('../utils/toItemResponse');

const list = exports.list = async function list(req) {
  const uw = req.uwave;
  const roles = await uw.acl.getAllRoles();

  return toItemResponse(roles, {
    url: req.fullUrl,
  });
}

const createRole = exports.createRole = async function createRole(req) {
  const uw = req.uwave;
  const { name } = req.params;
  const { permissions } = req.body;

  const role = await uw.acl.createRole(name, permissions);

  return toItemResponse(role, {
    url: req.fullUrl,
  });
}

const deleteRole = exports.deleteRole = async function deleteRole(req) {
  const uw = req.uwave;
  const { name } = req.params;

  await uw.acl.deleteRole(name);

  return toItemResponse({}, {
    url: req.fullUrl,
  });
}
