'use strict';

const Service = require('egg').Service;

class TagService extends Service {
  async create(params) {
    const { ctx } = this;
    const { name } = params;
    const result = await ctx.model.Tag.findOne({ where: { name } });
    if (!result) {
      await ctx.model.Tag.create({ name });
    } else {
      ctx.throw(400, '标签已存在');
    }
  }
}

module.exports = TagService;
