'use strict';
const Controller = require('egg').Controller;

class CommonController extends Controller {
  // 创建验证码
  async createImageCaptcha() {
    const { ctx } = this;
    const result = ctx.helper.createImageCaptcha(ctx);
    ctx.response.type = 'image/svg+xml';
    ctx.body = result;
  }
}

module.exports = CommonController;
