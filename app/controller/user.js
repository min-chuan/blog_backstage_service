'use strict';
const UserValidate = require('./../validate/user');
const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');

class UserController extends Controller {
  // 登录
  async login() {
    const { ctx } = this;
    const data = ctx.request.body;
    ctx.validate(UserValidate.login, data);
    ctx.helper.verifyImageCaptcha(ctx, data.qrcode);
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
  // 创建用户
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
