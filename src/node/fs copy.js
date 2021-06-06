const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const dir = path.join(__dirname, './files')

var questions = [{
  type: 'input',
  name: 'name',
  message: '请输入文件名',
},{
  type: 'input',
  name: 'content',
  message: '请输入文件内容',
  validate: val => {
    if (val.match(/\d{11}/g)) {
      return '禁止输入11位数字'
    }
    return true
  },
},{
  type: 'confirm',
  name: 'watch',
  message: '是否使用监听？',
  prefix: '前缀',
},{
  type: 'confirm',
  name: 'filter',
  message: '是否进行文件过滤？',
  suffix: '后缀',
  when(answers){
    return answers.watch
  },
},{
  type: 'list',
  name: 'ext',
  message: '请选择文件类型: ',
  choices: ['.txt', '.md', '.js'],
}]

inquirer.prompt(questions).then(answers => {
  const fileName = path.join(__dirname, './tmp', `${answers['name']}${answers['ext']}`)
  fs.writeFile(fileName, answers['content'], err => {
    if (err) {
      console.error(err)
      return
    }
  })
})

// fs 模块可用于与文件系统进行交互（以类似于标准 POSIX 函数的方式）。
// 所有的文件系统操作都具有同步的、回调的、以及基于 promise 的形式。

// 删除文件

// 重命名

// 新增文件

// 读取文件
fs.readFile(path.join(dir, '咏鹅.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('异步读取文件: ')
  console.log(data)
})

try {
  const data = fs.readFileSync(path.join(dir, '咏鹅.txt'), 'utf8')
  console.log('同步读取文件: ')
  console.log(data)
} catch (err) {
  console.error(err)
}



fs.stat(path.join(dir, 'README.md'), (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(`是否文件：${stats.isFile()}`)
  console.log(`是否目录: ${stats.isDirectory()}`)
  console.log(`是否符号链接: ${stats.isSymbolicLink()}`)
  console.log(`文件大小: ${stats.size}`)
})

// 打开文件
// fs.open()

// 写入文件
const content = '一些内容'

fs.writeFile(path.join(dir, '咏鹅.txt'), content, err => {
  if (err) {
    console.error(err)
    return
  }
  // 文件写入成功
})

// 追加文件
const anoContent = '追加的内容'

fs.appendFile(path.join(dir, '咏鹅.txt'), anoContent, err => {
  if (err) {
    console.error(err)
    return
  }
  // 完成!
})
