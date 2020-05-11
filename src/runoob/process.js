/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-09 16:19:40
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-09 16:28:42
 */

console.log(`当前目录: ${process.cwd()}`)

console.log(`当前版本: ${process.version}`)

console.dir(process.memoryUsage())

process.on('exit', function(code) {
    // 监听退出事件
    console.log(`退出码: ${code}`)
})

console.log('程序执行结束')
