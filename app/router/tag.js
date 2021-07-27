'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/api/v1/tag', controller.tag.create);
};
