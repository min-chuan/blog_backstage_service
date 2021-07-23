'use strict';

module.exports = app => {
  app.router.post('/api/v1/user/register', app.controller.user.create);
  app.router.post('/api/v1/user/login', app.controller.user.index);
};
