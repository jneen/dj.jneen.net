const UwaveError = require('./UwaveError');

module.exports = class NotFoundError extends UwaveError {
  public = true;

  name = 'NotFoundError';

  code = 'NOT_FOUND';
}
