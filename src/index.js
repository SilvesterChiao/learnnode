const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const dirName = path.join(__dirname, '..', 'todoList')

const questions = [{
  type: 'list',
  name: 'action',
  message: '请选择你要进行的操作:',
  choices: [
    { key: 'view', name: '查看', value: 'view' },
    { key: 'add', name: '新增', value: 'add' },
    { key: 'edit', name: '编辑', value: 'edit' },
    { key: 'delete', name: '删除', value: 'delete' },
    { key: 'exit', name: '退出', value: 'exit' },
  ],
}]

function init () {
  inquirer.prompt(questions).then(({ action }) => {
    console.log(action)
    if(action === 'exit') {
      process.exit(1)
    } else if (action === 'view') {
      view()
    } else if (action === 'add') {
      add()
    } 
  })
}

function view () {
  fs.readdirSync(dirName).map(fileName => {
    console.log(fileName)
  })
  init()
}

function add () {
    inquirer.prompt([
      { type: 'input', name: 'title', message: '请输入标题:' },
      { type: 'input', name: 'component', message: '请输入内容:' },
    ]).then(({ title, component }) => {
      try {
        if (!fs.existsSync(dirName)) {
          fs.mkdirSync(dirName)
	}
        fs.writeFile(path.join(dirName, `${title}.txt`), component, err => {
          if (err) {
            console.error(err)
	  } else {
            init()
	  }
        })
      } catch (err) {
        console.error(err)
      }
    })
}

init()
