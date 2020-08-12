/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-28 13:56:37
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-06-30 16:22:53
 */

var { mock, Random } = require('mockjs');

// 1. 数据模板定义规范(DTD)
// 'name|rule': value 初始值和类型  @占位符
// 'name|min-max': value
// 'name|count': value
// 'name|min-max.dmin-dmax': value
// 'name|min-max.dcount': value
// 'name|count.dmin-dmax': value
// 'name|count.dcount': value
// 'name|+step': value
var demo = mock({
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
        return 'function';
    },
    'regexp': /[a-z][A-Z][0-9]/, // 生成符合格式的字符串
})

// 2. 数据占位符定义规范(DPD)
// 3. Mock.Random

Random.email();
mock('@email');
mock({ email: '@email' });

// 4. 扩展

Random.extend({
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations);
    }
})

var data = mock({
    // extend
    extend: {
        constellation: '@CONSTELLATION',
    },
    // Basic
    basic: {
        boolean: '@BOOLEAN',
        natural: '@NATURAL',
        integer: '@INTEGER',
        float: '@FLOAT',
        character: '@CHARACTER',
        string: '@STRING',
        range: '@RANGE(5)',
    },
    // Date
    date: {
        date: '@DATE',
        time: '@TIME',
        datetime: '@DATETIME',
        now: '@NOW',
    },
    // Image
    image: {
        image: '@IMAGE',
        // dataImage: '@dataImage',
    },
    // Color
    color: {
        color: '@COLOR',
        hex: '@HEX',
        rgb: '@RGB',
        rgba: '@RGBA',
        hsl: '@HSL',
    },
    // Text
    text: {
        paragraph: '@PARAGRAPH',
        cparagraph: '@CPARAGRAPH',
        sentence: '@SENTENCE',
        csentence: '@CSENTENCE',
        word: '@WORD',
        cword: '@CWORD',
        title: '@TITLE',
        ctitle: '@CTITLE',
    },
    // Name
    name: {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        name: '@NAME',
        cfirst: '@CFIRST',
        clast: '@CLAST',
        cname: '@CNAME',
        full: '@first @middle @last',
    },
    // Web
    web: {
        url: '@URL',
        protocol: '@PROTOCOL',
        domain: '@DOMAIN',
        tld: '@TLD',
        email: '@EMAIL',
        ip: '@IP',
    },
    // Address
    address: {
        region: '@REGION',
        province: '@PROVINCE',
        city: '@CITY',
        county: '@COUNTY',
        zip: '@ZIP',
    },
    // Helper
    helper: {
        capitalize: '@CAPITALIZE("silvester")',
        upper: '@UPPER("s")',
        lower: '@LOWER("S")',
        pick: '@PICK([1, 2, 3, 4])',
        shuffle: '@SHUFFLE([1, 2, 3, 4])',
    },
    // Miscellaneous
    miscellaneous: {
        guid: '@GUID',
        id: '@ID',
        increment: '@INCREMENT',
    },
})

// 5. Mock.mock


// 6. Mock.setup

// 7. Mock.valid

// 8. Mock.toJSONSchema

module.exports = {
    data,
    demo,
};
