/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-11 13:46:46
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-11 14:52:52
 */

 import 'babel-polyfill'

// 箭头函数
input.map(item => item + 1)

// Array.from
const array = [1, 2, 3, 4]
const newArray = Array.from(array)

// 结构赋值
const obj = {
    name: 'Emily',
    age: 18
}

const { name, age } = obj
