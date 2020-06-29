/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-28 10:05:34
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-28 13:55:46
 */

// 三种模块: 内置模块、第三方模块、自建模块
// 优先级: 缓存 > 原生模块
// node.js 默认后缀 .js, 可以省略
// require 对象
// exports 对象

// 1. 导出属性或方法
exports.hello = function() {
    console.log('Hello World!');
}

// 2. 导出对象
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    }
    this.sayHello = function() {
        console.log(`Hello ${name}`);
    }
}

module.exports = Hello;
// var Hello = require('./hello')
// hello = new Hello();

// 3. 导出对象
// modules.exports = function() {}
