const inquirer = require('inquirer')

var questions = [{
  type: 'input',
  name: 'name',
  message: '你叫什么名字？',
},{
  type: 'input',
  name: 'phone',
  message: '请输入手机号: ',
  validate: val => {
    if (val.match(/\d{11}/g)) {
      return true
    }
    return '请输入11位数字'
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
  name: 'fruit',
  message: '请选择一种水果: ',
  choices: ['Apple', 'Pear', 'Banana'],
  filter(val){
    return val.toLowerCase()
  },
},{
  type: 'rawlist',
  name: 'animal',
  message: '请选择一种动物:',
  choices: ['Tiger', 'Bear', 'Duck', 'Snake'],
},{
  type: 'expand',
  name: 'pet',
  message: '请选择一种宠物:',
  choices: [{
    key: 'd',
    name: '狗',
    value: 'dog',
  },{
    key: 'c',
    name: '猫',
    value: 'cat',
  }],
},{
  type: 'checkbox',
  name: 'color',
  message: '请选择颜色:',
  choices: [
    { name: 'red' },
    new inquirer.Separator(),
    { name: 'blue', checked: true },
    { name: 'green' },
    new inquirer.Separator('---'),
    { name: 'yellow' },
  ],
//  pageSize: 3,
},{
  type: 'password',
  name: 'pwd',
  message: '请输入密码:',
},{
  type: 'editor',
  name: 'editor',
  message: '请输入备注:',
}]

inquirer.prompt(questions).then(answers => {
  const { name, phone, watch, filter, fruit, animal, pet, color, pwd, editor } = answers;
  console.log(`你好 ${name}!`)
  console.log(`你的手机号是: ${phone}`)
  console.log(`是否使用监听: ${watch}`)
  if (watch) {
    console.log(`是否进行文件过滤: ${filter}`)
  }
  console.log(`你最喜欢的水果是: ${fruit}`)
  console.log(`你最喜欢的动物是: ${animal}`)
  console.log(`你最喜欢的宠物是: ${pet}`)
  console.log(`你最喜欢的颜色是: ${color}`)
  console.log(`你的密码是: ${pwd}`)
  console.log(`备注: ${editor}`)
})
