const joi = require('joi');
const wrapMiddleware = require('../utils/wrapMiddleware');

module.exports = function checkFields(types) {
  return wrapMiddleware(async (req) => {
    await joi.validate(req, types, {
      abortEarly: false,
      allowUnknown: true,
    });
  });
}
