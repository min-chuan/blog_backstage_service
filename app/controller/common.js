'use strict';
const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');

class UserController extends Controller {
  createImageCode(ctx) {
    // 1.生成验证码
    const c = svgCaptcha.create({
      size: 4, // 验证码长度
      width: 120, // 验证码图片宽度
      height: 40, // 验证码图片高度
      fontSize: 50, // 验证码文字大小
      ignoreChars: '0oO1ilI', // 验证码字符中排除内容 0o1i
      noise: 4, // 干扰线条的数量
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      background: '#eee', // 验证码图片背景颜色
    });
    // 2.保存生成的验证码
    console.log(c.text);
    ctx.session.captcha = {
      code: c.text,
      expire: Date.now() + 60 * 1000, // 验证码1分钟之后过期
    };
    // 3.将验证码发送给客户端
    return c.data;
  }
  verifyImageCode(ctx, clientCode) {
    // 1.取出服务端中保存的验证码和过期时间
    if (!ctx.session.captcha) {
      ctx.throw(400, '请重新获取验证码');
    }
    const { code: serverCode, expire: serverExpire } = ctx.session.captcha;

    if (Date.now() > serverExpire) {
      ctx.session.captcha = null;
      ctx.throw(400, '验证码已经过期');
    } else if (serverCode !== clientCode) {
      ctx.session.captcha = null;
      ctx.throw(400, '验证码不正确');
    }
    ctx.session.captcha = null;
  }
}

module.exports = UserController;
