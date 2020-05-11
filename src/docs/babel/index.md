<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-11 11:20:07
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-11 22:17:49
 -->

# Babel

## 安装

## 配置文件

[配置文件](/src/docs/babel/config.md)

## 命令行

```bash
# 转码并输出到标准输出
babel example.js
# 转码并输出到文件
babel example.js --out-file compiled.js
# 或
babel example.js -o compiled.js
# 转码整个目录
babel src --out-dir lib
# 或者
babel src -d lib
# 生成 source map 文件
babel src -d lib -s
```

## 相关 npm 包

1. babel-cli: 命令行
1. babel-node: 直接执行 node.js 代码, 代替 node 命令
1. babel-core: 核心模块
1. babel-polyfill: 增加新增 API 支持
1. babel-eslint: eslint 语法检查
1. babel-register:

## 参考文献

1. [Babel 中文网 · Babel - 下一代 JavaScript 语法的编译器](https://www.babeljs.cn/)
1. [一口（很长的）气了解 babel](https://zhuanlan.zhihu.com/p/43249121)
1. [Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html?bsh_bid=1851048600)
1. [Babel 7 基础入门学习（详细版）](https://blog.csdn.net/weixin_41046961/article/details/87908962)
1. [babel-preset-env使用指南](https://www.cnblogs.com/chyingp/archive/2018/06/05/9137849.html)
1. [es6 各功能浏览器兼容性](https://kangax.github.io/compat-table/es6/)
