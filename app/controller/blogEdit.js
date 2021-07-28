'use strict';
const Controller = require('egg').Controller;
const BlogEditValidate = require('./../validate/blogEdit');

class BlogEditController extends Controller {
  async release() {
    const { ctx } = this;
    const data = ctx.request.body;
    ctx.validate(BlogEditValidate.release, data);
    const t = await ctx.model.transaction();
    try {
      const article = await ctx.service.article.create(data); // 添加文章
      await ctx.service.articleTag.bulkCreate({ articleId: article.id, tagIdList: data.tagIdList }); // 批量添加关联表
      await t.commit();
    } catch (error) {
      await t.rollback();
      throw error; // 继续向外抛异常
    }
    ctx.status = 200;
    ctx.body = {};
  }
}

module.exports = BlogEditController;
