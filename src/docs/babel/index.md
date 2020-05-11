<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-11 11:20:07
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-11 14:27:45
 -->

# Babel

## 安装

## 配置文件

.babelrc

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

1. babel-cli
1. babel-node
1. babel-register
1. babel-core
1. babel-polyfill

## 参考文献

1. [Babel 中文网 · Babel - 下一代 JavaScript 语法的编译器](https://www.babeljs.cn/)
1. [一口（很长的）气了解 babel](https://zhuanlan.zhihu.com/p/43249121)
1. [Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html?bsh_bid=1851048600)
1. [Babel 7 基础入门学习（详细版）](https://blog.csdn.net/weixin_41046961/article/details/87908962)
