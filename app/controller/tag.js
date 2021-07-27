'use strict';
const TagValidate = require('./../validate/tag');
const Controller = require('./common');

class TagController extends Controller {
  async index() {
    const { ctx } = this;

  }
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
