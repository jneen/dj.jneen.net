const toItemResponse = require('../utils/toItemResponse');

// eslint-disable-next-line import/prefer-default-export
const getServerTime = exports.getServerTime = function getServerTime(req) {
  return toItemResponse({
    time: Date.now(),
  }, { url: req.fullUrl });
}
