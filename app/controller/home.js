'use strict';
const Controller = require('egg').Controller;
/* 方案一
const renderer = require('vue-server-renderer').createRenderer();
const createApp = require('/path/to/built-server-bundle.js');
*/

/* 方案二 */
const { createBundleRenderer } = require('vue-server-renderer');
const createApp = require('/path/to/built-server-bundle.js');


class HomeController extends Controller {
  // 首页
  async index() {
    const { ctx } = this;
    /* 方案一
    const app = await createApp(context);
    const html = await renderer.renderToString(app);
    ctx.body = html;
    */

    /* 方案二 */
    const renderer = createBundleRenderer(createApp, {
      runInNewContext: false,
    });
    const html = await renderer.renderToString(context);
    ctx.body = html;
  }
}

module.exports = HomeController;
