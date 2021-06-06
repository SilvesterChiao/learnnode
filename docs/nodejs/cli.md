# 使用 Nodejs 开发一个属于自己的命令行工具

## 命令行

1. 看豆瓣
1. 刷知乎
1. 天气
1. 单位换算
1. 笑话
1. 网速
1. 图片处理
1. 颜色信息
1. 微博、推特
1. 文字游戏
1. emoji 表情
1. 聊天

目的：基于 Nodejs 的命令行工具，可以访问 Github

1. Nodejs 基础
1. Github API
1. 命令行输入输出
1. 解析输入，参数（commondjs）
1. colors 着色
1. 发布

## 背景

使用 _Nodejs_ 开发一个查看 _Github_ 仓库的命令行工具，2009 年 _Nodejs_ 横空出世，本意是使用 _javascript_ 开发服务端程序，万万没想到，反倒是对前端开发产生了巨大的影响，自动化工具、打包工具、脚手架层出不穷，可以说 _Nodejs_ 是现代前端开发不可或缺的技能。本文通过开发一个非常简单的命令行工具，介绍从无到有的发布一个 _NPM_ 包。至于为什么选择查看 _Github_ 仓库，年龄大了脑子不好使，_clone_ 项目的时候总忘记自己有啥项目，项目名叫啥，而且懒癌晚期，不想再去打开浏览器去 _Github_ 查。

## 设计

```bash
# 查看 SilvesterChiao 用户的 public 仓库
sil-github --repos SilvesterChiao
```

## 钩子

- preinstall
- postinstall
- prepublish
- postpublish

## 实现步骤

### 1. _Nodejs_ 和 _NPM_

_Node.js_ 是一个基于 Chrome V8 引擎的 _JavaScript_ 运行环境。发布于 2009 年 5 月。具有事件驱动、非阻塞、轻量、高效等特点。

_NPM_ 是 _Node.js_ 自带的包管理工具。

下面创建一个项目，开始写 _Node.js_ 命令行工具：

```bash
# 创建一个仓库 sil-github-cli，
mkdir sil-github-cli
cd sil-github-cli
# 初始化
npm init
# 创建 src/index.js 文件
touch src/index.js
```

_index.js_ 内容如下：

```javascript
// src/index.js
#!/usr/bin/env node
console.log('Hello World!');
```

完成初始化后在 _package.json_ 中加入一个 bin 字段，然后执行 `npm link`，会在本地添加一个 _sil-github_ 的命令，用于开发时的测试。

```json
{
  "bin": {
    "sil-github": "src/index.js"
  }
}
```

这时执行 _sil-github_ 就会看到终端输出如下内容。

![Hello World](../../../assets/images/hello_world.png)

### 2. Github API

接下来在 _src/index.js_ 中写一个调用 _Github API_ 的方法：

```javascript
function getRepos() {
  const optons = {
    url: 'https://api.github.com/users/SilvesterChiao/repos',
    method: 'GET',
    json: true,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
    },
  };

  return new Promise(function(resolve, reject) {
    var requestC = request.defaults({ jar: true });

    requestC(optons, function(error, response, body) {
      if (error) {
        console.log('error occurred: ' + error);
        reject(error);
      }
      body.forEach((item, index) => {
        console.log(`${index + 1}: ${item.name}`);
      });
    });
  });
}

getRepos();
```

保存之后再次执行 _sil-github_， 对没错，直接执行就可以，不需要重新 _npm link_，然后终端就会循环打印 _SilvesterChiao_ 这个用户（其实就是鄙人）的所有仓库名，如下图：

![repository](../../../assets/images/repositories.png)

### 3. 加载动画和输出着色

现在加点特效美化一下，先加 _loading_ 效果。用一个叫做 _ora_ 的包，无意中翻到的，可惜 _Windows_ 上设置类型无效。

<img src="../../../assets/images/screenshot.svg" width="500">

增加代码如下：

```javascript
// 引入 ora
cont ora = require('ora')
// getRepos 方法开头加上
const spinner = ora({
  text: 'Loading',
}).start();
// 调用 Github API 成功之后关闭
spinner.succeed('Succeed');
// 输入仓库名之后退出
process.exit();
```

命令行输出都是白色的，可以通过 _colors_ 包进行美化。安装引入之后使用非常简单，针对字符串有两种方法。除了文本颜色还可以设置背景颜色、文字样式等。

```javascript
const colors = require('colors');
console.log('绿色'.green);
console.log(colors.yellow('黄色'));
```

现在输出是这个样子的了：

![colors](../../../assets/images/colors.png)

### 4. 使用 Commanderjs 解析输入参数

差点忘了最重要的一点，不能都查我的仓库吧，现在加上根据传入的用户名去查仓库，可以使用 _Commanderjs_ 解析参数。

```javascript
const program = require('commander');

program
  .version('0.0.1')
  .option('--repos', 'view repos')
  .parse(process.argv);

if (program.repos) {
  const userName = process.argv[3];
  getRepos(userName);
}
```

### 5. 发布 _NPM_ 包

先在 [NPM](https://www.npmjs.com/) 上注册一个账号，注册之后回到项目中执行 `npm login` ，输入用户名、密码、Email，登录之后会显示 _NPM_ 源地址，如果使用淘宝镜像需要在发布之前改回官方源。

```bash
npm config set registry=http://registry.npmjs.org
```

最后到了激动人心的时刻了，执行 `npm publish`，_NPM_ 会读取项目下的 _README.md_ 、 _package.json_ 等信息发送到 _NPM_ 源上，发布之前最好去 [NPM](https://www.npmjs.com/) 上搜索一下有没有重名，后续更新再发布的话别忘了修改 _package.json_ 中的 _version_。发布成功之后就可以全局安装使用了。

![publish](../../../assets/images/npm_publish.png)

## 完成

[Github 地址](https://github.com/SilvesterChiao/sil-github-cli)
[NPM 地址](https://www.npmjs.com/package/sil-github-cli)

## 参考文档

1. [Node.js 命令行程序开发教程](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
1. [一篇文章搞定 Github API 调用 (v3）](https://segmentfault.com/a/1190000015144126?utm_source=tag-newest)
1. [用 nodejs 读取 github 上某仓库的某条 issue 明细](https://cloud.tencent.com/developer/article/1438550)
1. [Node.js npm colors](https://blog.csdn.net/chy555chy/article/details/55213456)
1. [node 使用 colors.js 在终端多颜色 console](http://www.ptbird.cn/nodejs-colorsjs-terminal-console.html)
1. [ora 一个优雅的终端微调器](http://www.fly63.com/nav/1390)
1. [ora Github](https://github.com/sindresorhus/ora)
1. [commander.js 基本用法](https://juejin.im/post/5c8be466f265da2dc849af70)
