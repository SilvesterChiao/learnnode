const chalk = require('chalk')
const ProgressBar = require('progress')

console.log(chalk.yellow('你好'))

const bar = new ProgressBar(':bar', { total: 10 })

const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
