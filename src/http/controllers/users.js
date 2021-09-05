const createDebug = require('debug');
const {
  HTTPError,
  PermissionError,
} = require('../errors');
const skipIfCurrentDJ = require('../utils/skipIfCurrentDJ');
const removeFromWaitlist = require('../utils/removeFromWaitlist');
const getOffsetPagination = require('../utils/getOffsetPagination');
const toItemResponse = require('../utils/toItemResponse');
const toListResponse = require('../utils/toListResponse');
const toPaginatedResponse = require('../utils/toPaginatedResponse');
const beautifyDuplicateKeyError = require('../utils/beautifyDuplicateKeyError');

const chat = require('./chat');
exports.muteUser = chat.muteUser;
exports.unmuteUser = chat.unmuteUser;

const debug = createDebug('uwave:http:users');

const getUsers = exports.getUsers = async function getUsers(req) {
  const uw = req.uwave;
  const { filter } = req.query;
  const pagination = getOffsetPagination(req.query, {
    defaultSize: 50,
  });

  debug('getUsers', filter, pagination);

  const users = await uw.getUsers(filter, pagination);

  return toPaginatedResponse(users, {
    baseUrl: req.fullUrl,
    filter,
  });
}

const getUser = exports.getUser = async function getUser(req) {
  const uw = req.uwave;
  const userID = req.params.id;

  const user = await uw.getUser(userID);

  return toItemResponse(user, {
    url: req.fullUrl,
  });
}

const getUserRoles = exports.getUserRoles = async function getUserRoles(req) {
  const uw = req.uwave;
  const { id } = req.params;

  const user = await uw.getUser(id);
  const roles = await user.getPermissions();

  return toListResponse(roles, {
    url: req.fullUrl,
  });
}

const addUserRole = exports.addUserRole = async function addUserRole(req) {
  const uw = req.uwave;
  const { id, role } = req.params;

  const selfHasRole = await req.user.can(role);
  if (!selfHasRole) {
    throw new PermissionError('You cannot assign roles you do not have');
  }

  const user = await uw.getUser(id);

  await user.allow([role]);

  return toItemResponse({}, {
    url: req.fullUrl,
  });
}

const removeUserRole = exports.removeUserRole = async function removeUserRole(req) {
  const uw = req.uwave;
  const { id, role } = req.params;

  const selfHasRole = await req.user.can(role);
  if (!selfHasRole) {
    throw new PermissionError('You cannot remove roles you do not have');
  }

  const user = await uw.getUser(id);

  await user.disallow([role]);

  return toItemResponse({}, {
    url: req.fullUrl,
  });
}

const changeUsername = exports.changeUsername = async function changeUsername(req) {
  const uw = req.uwave;
  const { id } = req.params;
  const { username } = req.body;

  try {
    const user = await uw.updateUser(
      id,
      { username },
      { moderator: req.user },
    );

    return toItemResponse(user);
  } catch (error) {
    throw beautifyDuplicateKeyError(error);
  }
}

const changeAvatar = exports.changeAvatar = async function changeAvatar() {
  throw new HTTPError(500, 'Not implemented');
}

const disconnectUser = exports.disconnectUser = async function disconnectUser(uw, user) {
  const userID = typeof user === 'object' ? `${user._id}` : user;

  await skipIfCurrentDJ(uw, userID);

  try {
    await removeFromWaitlist(uw, userID);
  } catch (e) {
    // Ignore
  }

  await uw.redis.lrem('users', 0, userID);

  uw.publish('user:leave', { userID });
}

const getHistory = exports.getHistory = async function getHistory(req) {
  const uw = req.uwave;
  const { id } = req.params;
  const pagination = getOffsetPagination(req.query, {
    defaultSize: 25,
    maxSize: 100,
  });

  const user = await uw.getUser(id);
  const history = await user.getHistory(pagination);

  return toPaginatedResponse(history, {
    baseUrl: req.fullUrl,
    included: {
      media: ['media.media'],
      user: ['user'],
    },
  });
}
