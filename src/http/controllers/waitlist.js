const toItemResponse = require('../utils/toItemResponse');
const toListResponse = require('../utils/toListResponse');

const getWaitlist = exports.getWaitlist = async function getWaitlist(req) {
  const { waitlist } = req.uwave;

  const list = await waitlist.getUserIDs();
  return toListResponse(list, { url: req.fullUrl });
}

// POST waitlist/ entry point: used both for joining the waitlist,  and for
// adding someone else to the waitlist.
const addToWaitlist = exports.addToWaitlist = async function addToWaitlist(req) {
  const { waitlist } = req.uwave;

  const moderator = req.user;
  const { userID } = req.body;

  await waitlist.addUser(userID, { moderator });

  const updated = await waitlist.getUserIDs();
  return toListResponse(updated, { url: req.fullUrl });
}

const moveWaitlist = exports.moveWaitlist = async function moveWaitlist(req) {
  const { waitlist } = req.uwave;

  const moderator = req.user;
  const { userID, position } = req.body;

  await waitlist.moveUser(userID, position, { moderator });

  const updated = await waitlist.getUserIDs();
  return toListResponse(updated, { url: req.fullUrl });
}

const removeFromWaitlist = exports.removeFromWaitlist = async function removeFromWaitlist(req) {
  const { waitlist } = req.uwave;
  const moderator = req.user;
  const userID = req.params.id;

  await waitlist.removeUser(userID, { moderator });

  const updated = await waitlist.getUserIDs();
  return toListResponse(updated, { url: req.fullUrl });
}

const clearWaitlist = exports.clearWaitlist = async function clearWaitlist(req) {
  const { waitlist } = req.uwave;
  const moderator = req.user;

  await waitlist.clear({ moderator });

  const updated = await waitlist.getUserIDs();
  return toListResponse(updated, { url: req.fullUrl });
}

const lockWaitlist = exports.lockWaitlist = async function lockWaitlist(req) {
  const { waitlist } = req.uwave;
  const moderator = req.user;

  const { lock } = req.body;

  if (lock) {
    await waitlist.lock({ moderator });
  } else {
    await waitlist.unlock({ moderator });
  }

  return toItemResponse({ locked: lock }, { url: req.fullUrl });
}
