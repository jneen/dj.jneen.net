const EmailError = exports.EmailError = class EmailError extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this);
    this.message = message;
  }
}

const APIError = exports.APIError = class APIError extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this);
    this.message = message;
  }

  /**
   * Hack to force other Error instances to be public.
   */
  static wrap(error) {
    Object.setPrototypeOf(error, APIError.prototype);
    return error;
  }
}

const CombinedError = exports.CombinedError = class CombinedError extends APIError {
  constructor(errors) {
    super('Multiple errors');
    this.errors = errors;
  }
}

const PasswordError = exports.PasswordError = class PasswordError extends APIError {
  name = 'PasswordError';
}

const TokenError = exports.TokenError = class TokenError extends APIError {
  name = 'TokenError';
}

const HTTPError = exports.HTTPError = class HTTPError extends APIError {
  name = 'HTTPError';

  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const NotFoundError = exports.NotFoundError = class NotFoundError extends HTTPError {
  name = 'NotFoundError';

  constructor(message) {
    super(404, message);
  }
}

const PermissionError = exports.PermissionError = class PermissionError extends HTTPError {
  name = 'PermissionError';

  constructor(message) {
    super(403, message);
  }
}

const RateLimitError = exports.RateLimitError = class RateLimitError extends HTTPError {
  name = 'RateLimitError';

  constructor(message) {
    super(429, message);
  }
}
