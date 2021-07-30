'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async index() {
    const { ctx } = this;
    return await ctx.model.Article.findAll();
  }
  async create(params) {
    const { ctx } = this;
    const result = await ctx.model.Article.findOne({ where: { title: params.title } });
    if (result) {
      ctx.throw(400, '标题已存在');
    }
    return await ctx.model.Article.create(params, { fileds: [ 'title', 'content', 'abstract' ] });
  }
}

module.exports = ArticleService;
