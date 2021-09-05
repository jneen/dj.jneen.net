const router = require('router');
const route = require('../route');
const protect = require('../middleware/protect');
const controller = require('../controllers/acl');

module.exports = function serverRoutes() {
  return router()
    // GET /roles - List available roles.
    .get(
      '/',
      route(controller.list),
    )
    // PUT /roles/:name - Create a new role.
    .put(
      '/:name',
      protect('acl.create'),
      route(controller.createRole),
    )
    // DELETE /roles/:name - Delete a new role.
    .delete(
      '/:name',
      protect('acl.delete'),
      route(controller.deleteRole),
    );
}
