'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/api/v1/user/register', controller.user.create);
  router.post('/api/v1/user/login', controller.user.index);
};
