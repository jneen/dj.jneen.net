const Uwave = require('./Uwave');
const UwaveError = require('./errors/UwaveError');
const NotFoundError = require('./errors/NotFoundError');

const uwave = module.exports = function uwave(opts) {
  return new Uwave(opts);
}

Object.assign(uwave, {
  Uwave,
  UwaveError,
  NotFoundError,
});
