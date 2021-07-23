
'use strict';
module.exports = () => {
  const config = exports = {};

  // 添加sequelize配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '888888',
    port: 3306,
    database: 'blog_backstage_dev',
    // 注意点: 如果需要使用时间戳, 那么就必须指定当前的时区, 否则会相差8个小时
    timezone: '+08:00',
  };

  return config;
};
