/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-28 17:27:16
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-28 19:51:56
 */

var router = require('koa-router')();
const teacherList = require('../../mock/teacheres');

router.prefix('/teacher');

router.get('/', async (ctx, next) => {
    ctx.body = 'teacherList';
})

router.get('/getTeacherList', async (ctx, next) => {
    ctx.body = teacherList;
})

module.exports = router;
