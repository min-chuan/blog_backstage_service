'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/common')(app);
  require('./router/user')(app);
  require('./router/tag')(app);
};
