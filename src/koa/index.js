/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-26 11:17:34
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-07-01 13:45:58
 */

 const path = require('path');
const Koa = require('koa');
const views = require('koa-views');
const serve = require('koa-static');
const WebSocket = require('koa-websocket');
var index = require('./routers/index');
var routerTeacher = require('./routers/teacher');
var teacher = require('./server/teacher');
const app = WebSocket(new Koa());

let ctxs = [];

// 加载模板引擎
app.use(views(path.join(__dirname, '../common/pages'), {
    extension: 'ejs'
}));

// 静态资源
app.use(serve(path.join(__dirname, '../common/assets')));

// 定义接口
app.use(teacher.routes(), teacher.allowedMethods());

// 定义路由
app.use(index.routes(), index.allowedMethods());
app.use(routerTeacher.routes(), routerTeacher.allowedMethods());

app.listen(5002);

// websocket
app.ws.use((ctx, next) => {
    ctxs.push(ctx);
    ctx.websocket.on('message', (message) => {
        console.log(message);
        for(let i = 0; i < ctxs.length; i += 1) {
            if (ctx === ctx[i]) {
                continue
            }
            ctxs[i].websocket.send(message);
        }
    })
    ctx.websocket.on('close', (message) => {
        let index = ctxs.indexOf(ctx);
        ctxs.splice(index, 1);
    })
})
