const router = require('router');
const route = require('../route');
const controller = require('../controllers/now');

module.exports = function nowRoute() {
  return router()
    // GET /now/ - Get a combined view of the current state.
    .get(
      '/',
      route(controller.getState),
    );
}
