/**
 * Wrap `async` middleware into an express style callback.
 */
module.exports = function wrapMiddleware(middleware) {
  return (req, res, next) => {
    middleware(req, res)
      .then(() => next(), next);
  };
}
