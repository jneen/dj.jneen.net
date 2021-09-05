const UwaveError = require('./UwaveError');

module.exports = class PasswordError extends UwaveError {
  public = true;

  name = 'PasswordError';

  code = 'INCORRECT_PASSWORD';
}
