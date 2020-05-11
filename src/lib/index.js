'use strict';

require('babel-polyfill');

// 箭头函数
input.map(function (item) {
  return item + 1;
});

// Array.from
/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-11 13:46:46
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-11 14:52:52
 */

var array = [1, 2, 3, 4];
var newArray = Array.from(array);

// 结构赋值
var obj = {
  name: 'Emily',
  age: 18
};

var name = obj.name,
    age = obj.age;