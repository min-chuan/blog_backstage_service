'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  async create(params) {
    const { ctx } = this;
    const { username, password } = params;
    // 检查用户名
    const result = await ctx.model.User.findOne({ where: { username } });
    console.log('xxxxxxxxxx', result);
  }
}

module.exports = UserService;
