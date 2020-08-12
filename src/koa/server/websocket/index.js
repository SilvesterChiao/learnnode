/*
 * @Author: SilvesterChiao
 * @Date: 2020-06-30 17:10:53
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-07-01 10:31:36
 */

const router = require('koa-router')();

router.prefix('/websocket');

router.get('/', async(ctx, next) => {
    ctx.body = 'Hello websocket';
})

module.exports = router;
