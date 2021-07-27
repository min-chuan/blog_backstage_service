'use strict';
const jwt = require('jsonwebtoken');
module.exports = (options, app) => {
  return async function errorHandler(ctx, next) {
    const { excludePathList } = options;
    const currentPath = ctx.url;
    if (excludePathList.includes(currentPath)) {
      /* 不需要权限的路由 */
      await next();
    } else {
      /* 需要权限的路由 */
      const token = ctx.cookies.get('token', {
        signed: false,
      });
      if (token) {
        try {
          await jwt.verify(token, app.config.keys);
          await next();
        } catch (e) {
          ctx.throw(401, '未登录');
        }
      } else {
        ctx.throw(401, '未登录');
      }
    }
  };
};
