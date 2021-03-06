const routes = require('next-routes')();

routes
  .add('login')
  .add('logout')
  .add('index', '/')
  .add('search', '/search')
  .add('profile', '/:id');

module.exports = routes;
