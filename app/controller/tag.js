'use strict';
const TagValidate = require('./../validate/tag');
const Controller = require('egg').Controller;

class TagController extends Controller {
  // 获取标签列表
  async index() {
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.tag.index(data);
    ctx.status = 200;
    ctx.body = result;
  }
  // 创建标签
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    ctx.validate(TagValidate.create, data);
    await ctx.service.tag.create(data);
    ctx.status = 200;
    ctx.body = {};
  }
}

module.exports = TagController;
