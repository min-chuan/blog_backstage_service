/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1627008904072_1681';
  // 中间件配置
  config.middleware = [ 'errorHandler', 'oauthHandler' ];
  config.oauthHandler = {
    excludePathList: [ '/api/v1/user/register', '/api/v1/user/login', '/api/v1/common/captcha' ],
  };

  // 校验插件配置
  config.validate = {
    convert: true,
    widelyUndefined: true,
  };

  // 用户自定义配置
  const userConfig = {};
  return {
    ...config,
    ...userConfig,
  };
};
