#!/usr/bin/env/ node
/*
 * @Author: SilvesterChiao
 * @Date: 2020-06-09 16:26:00
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-06-10 11:29:42
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({  // 创建 readline.Interface 类的实例
    input: process.stdin, // 可读流
    output: process.stdout, // 可写流
    prompt: '请输入 >', // 提示符
});

// 事件
// close
// line
// pause
// resume
// SIGCONT
// SIGINT
// SIGTSTP

rl.on('close', () => {
    // 关闭
    console.log('Bye')
})

rl.on('line', (input) => {
    // 行输入
    console.log(`接收到：${input}`)
})

rl.on('pause', () => {
    // 暂停
    console.log('Readline 暂停')
})

rl.on('resume', () => {
    // 恢复
    console.log('Readline 恢复')
})

rl.on('SIGCONT', () => {
    // <ctrl>-Z
    rl.prompt();
})

rl.on('SIGINT', () => {
    // <ctrl>-C
    rl.question('确定要退出吗？', (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            rl.pause();
        }
    })
})

rl.on('SIGTSTP', () => {
    console.log('捕获 SIGTSTP')
})

// rl.question('请输入反馈意见：', (answer) => {
//     // TODO: 将答案记录在数据库中
//     console.log(`感谢您的宝贵意见：${answer}`);

//     rl.close();
// });
