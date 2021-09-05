const router = require('router');
const route = require('../route');
const protect = require('../middleware/protect');
const controller = require('../controllers/bans');

module.exports = function banRoutes() {
  return router()
    .get(
      '/',
      protect('users.bans.list'),
      route(controller.getBans),
    )

    .post(
      '/',
      protect('users.bans.add'),
      route(controller.addBan),
    )

    .delete(
      '/:userID',
      protect('users.bans.remove'),
      route(controller.removeBan),
    );
}
