/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-28 16:41:44
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-28 19:54:56
 */

var router = require('koa-router')();

router.get('/', async (ctx, next) => {
    //渲染views下的index.ejs
    await ctx.render('home/index', {
        title: 'Hello Koa 23s!'
    })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
