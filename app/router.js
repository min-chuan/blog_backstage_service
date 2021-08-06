'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /* 后台api */
  require('./router/common')(app);
  require('./router/user')(app);
  require('./router/tag')(app);
  require('./router/article')(app);
  require('./router/blogEdit')(app);
  /* 前台页面 */
  router.get('/home', controller.home.index);
};
