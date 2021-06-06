const minimist = require('minimist')

//process.on('beforeExit', code => {
//  console.log(`进程 beforeExit 事件的退出码: ${code}`);
//})

//process.on('exit', code => {
//  console.log(`进程 exit 事件的退出码: ${code}`);
//})

console.log(`处理器架构: ${process.arch}`)

const args = minimist(process.argv.slice(2))
console.log(`Name: ${args['name']}`)
console.log(`启动时传递的参数: ${process.argv.join(', ')}`)

console.log(`当前的工作目录是: ${process.cwd()}`)

console.log(`env: ${process.env.user}`)

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
