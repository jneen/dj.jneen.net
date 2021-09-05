const toItemResponse = require('../utils/toItemResponse');

const getMotd = exports.getMotd = async function getMotd(req) {
  return toItemResponse(
    { motd: await req.uwave.getMotd() },
    { url: req.fullUrl },
  );
}

const setMotd = exports.setMotd = async function setMotd(req) {
  await req.uwave.setMotd(String(req.body.motd));

  return getMotd(req);
}
