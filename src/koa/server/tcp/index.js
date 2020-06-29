/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-29 10:42:02
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-29 10:42:23
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
