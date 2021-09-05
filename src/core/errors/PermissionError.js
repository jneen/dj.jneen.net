const UwaveError = require('./UwaveError');

module.exports = class PermissionError extends UwaveError {
  public = true;

  name = 'PermissionError';

  code = 'NOT_ALLOWED';

  constructor(message, { requiredRole }) {
    super(message);
    this.requiredRole = requiredRole;
  }
}
