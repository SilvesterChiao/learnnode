/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-26 15:16:22
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-27 09:48:45
 */

var Mock = require('mockjs')

// 1. 数据模板定义规范
// 'name|rule': value 初始值和类型  @占位符
// 'name|min-max': value
// 'name|count': value
// 'name|min-max.dmin-dmax': value
// 'name|min-max.dcount': value
// 'name|count.dmin-dmax': value
// 'name|count.dcount': value
// 'name|+step': value
var demo = Mock.mock({
    'name|1-3': 'repeat', // 重复 1-3次
    'firstname|2': 'abc', // 重复 2次
    'id|+1': 1, // 从1递增
    'age|18-22': 18, // 18-22之间的正数
    'amount|10-10000.1-2': 50, // 正数部分10-10000之间，小数部分保留到1-2位
    'marry|1': Boolean, // 随机布尔值, true 1/2 false 1/2
    'child|1-9': false, // false 1/10 true 9/10
    'friend|3': { // 随机选取3个属性
        name: 'Emily',
        age: 18,
        id: 1,
        hire: 'black',
    },
    'family|2-4': { // 随机选取2-4个属性
        name: 'Nacy',
        age: 17,
        id: 2,
        hire: 'gold',
        eye: 'black',
    },
    'hand|1': [1, 2, 3], // 随机选取1个
    'foot|+1': ['China', 'Jepe', 'Amer', 'Ind', 'Canda'], // 顺序选取1个元素
    'head|2-4': ['red', 'green'], // 重复2-4次
    'eye|3': ['sun', 'moon',], // 重复3次
    'function': () => {
        console.log(this);
        return 'function';
    },
    'regexp': /[a-z][A-Z][0-9]/, // 生成符合格式的字符串
})

// 2. 数据占位符定义规范

var data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1
    }]
})

module.exports = {
    data,
    demo,
};
