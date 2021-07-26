'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  async create(params) {
    const { ctx } = this;
    const { username, password } = params;
    // 检查用户名
    const result = await ctx.model.User.findOne({ where: { username } });
    // 创建用户
    const passwordText = ctx.helper.encryptText(password);
    if (!result) {
      await ctx.model.User.create({ username, password: passwordText, fields: [ 'username', 'password' ] });
    } else {
      ctx.throw(400, '用户名已存在');
    }
  }
}

module.exports = UserService;
