'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/api/v1/common/captcha', controller.common.createImageCode);
};
