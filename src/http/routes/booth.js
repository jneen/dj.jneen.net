const router = require('router');
const route = require('../route');
const validations = require('../validations');
const protect = require('../middleware/protect');
const checkFields = require('../middleware/checkFields');
const controller = require('../controllers/booth');

module.exports = function boothRoutes() {
  return router()
    // GET /booth/ - Get the current booth status.
    .get(
      '/',
      route(controller.getBooth),
    )
    // POST /booth/skip - Skip the current DJ's play.
    .post(
      '/skip',
      protect(),
      checkFields(validations.skipBooth),
      route(controller.skipBooth),
    )
    // POST /booth/replace - Replace the current DJ with someone else.
    .post(
      '/replace',
      protect('booth.replace'),
      checkFields(validations.replaceBooth),
      route(controller.replaceBooth),
    )
    // POST /booth/favorite - Add the current play to your favorites.
    .post(
      '/favorite',
      protect(),
      checkFields(validations.favorite),
      route(controller.favorite),
    )
    // GET /booth/history - Get recent plays.
    .get(
      '/history',
      checkFields(validations.getRoomHistory),
      route(controller.getHistory),
    );
}
