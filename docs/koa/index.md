<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-26 11:16:52
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-09-25 14:11:21
-->

# koajs 学习笔记

## 安装

```bash
npm install --save koa
```

## 创建服务器

```js
// index.js
const Koa = require('koa')
const app = new Koa();

app.listen(3000)
```

执行脚本

```bash
node index.js
```

## Context 对象

- ctx.request: 请求
  - path: 路由
  - accept
  - method
  - url
- ctx.response: 响应
  - type: 类型
  - status: 状态码
  - body: 响应体
  - redirect: 重定向
- ctx.throw(): 抛出错误
- ctx.cookies: 读写 `cookie`

## koa-route

## koa-static

## 中间件(middleware)

加载中间件
app.use()
中间件默认接收两个参数, 第一个是 `Context` 对象, 第二个是 `next` 函数, 调用 `next` 函数, 就可以把执行权转交给下一个中间件

如果有异步操作, 中间件必须写成 `async` 函数

使用 `koa-compose` 模块可以将多个中间件合成为一个

## koa-body

处理 `POST` 请求

## 参考文档

1. [Koa 框架教程](http://www.ruanyifeng.com/blog/2017/08/koa.html?from=groupmessage)
1. [koajs](https://github.com/koajs/koa)
1. [Koa -- 基于 Node.js 平台的下一代 web 开发框架](https://koa.bootcss.com/)
1. [Koa2 还有多久取代 Express](https://www.jianshu.com/p/63f430596cb8)
1. [node中从express到koa再到koa2的发展历程](https://www.cnblogs.com/fqh123/p/11032446.html)
1. [Node.js | Koa框架入门](https://www.jianshu.com/p/8116874f659b)
1. [koa 应用生成器](https://www.itying.com/koa/start-generator.html)
1. [读完这篇文章彻底搞懂koa和ejs](https://zhuanlan.zhihu.com/p/100558851)
