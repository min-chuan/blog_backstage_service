/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1627008904072_1681';
  // 中间件配置
  config.middleware = [ 'errorHandler' ];

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
