'use strict';

const Service = require('egg').Service;

class ArticleTagService extends Service {
  async bulkCreate(params) {
    const { ctx } = this;
    const { articleId, tagIdList } = params;
    const data = tagIdList.map(tagId => {
      return {
        tagId,
        articleId,
      };
    });
    await ctx.model.ArticleTag.bulkCreate(data);
  }
}

module.exports = ArticleTagService;
