const {
  NotFoundError,
  PermissionError,
} = require('../errors');
const toItemResponse = require('../utils/toItemResponse');

const muteUser = exports.muteUser = async function muteUser(req) {
  const uw = req.uwave;
  const { id } = req.params;
  const duration = req.body.time;

  if (req.user.id === id) {
    throw new PermissionError('You can\'t mute yourself.');
  }

  const user = await uw.getUser(id);
  if (!user) throw new NotFoundError('User not found.');

  await user.mute(duration, { moderator: req.user });

  return toItemResponse({});
}

const unmuteUser = exports.unmuteUser = async function unmuteUser(req) {
  const uw = req.uwave;
  const { id } = req.params;
  if (req.user.id === id) {
    throw new PermissionError('You can\'t unmute yourself.');
  }

  const user = await uw.getUser(id);
  if (!user) throw new NotFoundError('User not found.');

  await user.unmute({ moderator: req.user });

  return toItemResponse({});
}

const deleteAll = exports.deleteAll = function deleteAll(req) {
  req.uwave.deleteChat(
    {},
    { moderator: req.user },
  );
  return toItemResponse({});
}

const deleteByUser = exports.deleteByUser = function deleteByUser(req) {
  req.uwave.deleteChat(
    { userID: req.params.id },
    { moderator: req.user },
  );
  return toItemResponse({});
}

const deleteMessage = exports.deleteMessage = function deleteMessage(req) {
  req.uwave.deleteChat(
    { id: req.params.id },
    { moderator: req.user },
  );
  return toItemResponse({});
}
