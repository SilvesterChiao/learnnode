/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-26 11:17:34
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-28 19:42:13
 */

 const path = require('path');
const Koa = require('koa');
const views = require('koa-views');
const serve = require('koa-static');
var index = require('./routers/index');
var teacher = require('./server/teacher');
const app = new Koa();

// 加载模板引擎
app.use(views(path.join(__dirname, './pages'), {
    extension: 'ejs'
}));

// 静态资源
app.use(serve(path.join(__dirname, './assets')));

// 定义接口
app.use(teacher.routes(), teacher.allowedMethods());

// 定义路由
app.use(index.routes(), index.allowedMethods());

app.listen(5002);
