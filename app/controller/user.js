'use strict';
const UserValidate = require('./../validate/user');
const Controller = require('./common');
const jwt = require('jsonwebtoken');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const data = ctx.request.body;
    ctx.validate(UserValidate.index, data);
    this.verifyImageCode(data.qrcode); // 继承过来的方法
    const result = await ctx.service.user.getUser(data);
    // 创建token
    const user = result.dataValues;
    const token = jwt.sign(user, this.config.keys);
    ctx.cookies.set('token', token, {
      path: '/',
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: false,
      signed: false,
    });
    // 返回数据
    delete user.password;
    ctx.success = 200;
    ctx.body = user;
  }
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    ctx.validate(UserValidate.create, data);
    await ctx.service.user.create(data);
    ctx.body = {};
    ctx.status = 200;
  }
}

module.exports = UserController;
