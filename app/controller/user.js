'use strict';
const UserValidate = require('./../validate/user');
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
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
