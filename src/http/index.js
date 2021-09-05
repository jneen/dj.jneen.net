const UwaveHttpApi = require('./HttpApi');
const UwaveSocketServer = require('./SocketServer');

exports.createHttpApi = function createHttpApi(uw, opts) {
  console.log("====== HERE ========");
  return new UwaveHttpApi(uw, opts);
}
exports.createSocketServer = function createSocketServer(uw, opts) {
  return new UwaveSocketServer(uw, opts);
}
