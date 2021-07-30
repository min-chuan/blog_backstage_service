'use strict';
const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 获取标签列表
  async index() {
    const { ctx } = this;
    const result = await ctx.service.article.index();
    ctx.status = 200;
    ctx.body = result;
  }
}

module.exports = ArticleController;
