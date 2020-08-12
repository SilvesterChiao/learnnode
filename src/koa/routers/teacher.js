/*
 * @Author: SilvesterChiao
 * @Date: 2020-06-30 15:54:30
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-07-01 10:50:35
 */

var router = require('koa-router')();
const teacherList = require('../../mock/teacherList');

router.prefix('/teacheres');

router.get('/', async (ctx, next) => {
    // 渲染 pages/teacher 下的 teacheres.ejs
    await ctx.render('teacher/teacheres', {
        title: 'Hello Teacher'
    })
})

module.exports = router;
