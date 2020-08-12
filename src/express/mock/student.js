var Mock = require('mockjs');
var CreateData = require('../utils/createData');
var Random = Mock.Random;

// 扩展方法
Random.extend({
  constellation: function(date) {
    var constellations = [
      '白羊座',
      '金牛座',
      '双子座',
      '巨蟹座',
      '狮子座',
      '处女座',
      '天秤座',
      '天蝎座',
      '射手座',
      '魔羯座',
      '水瓶座',
      '双鱼座',
    ];
    return this.pick(constellations);
  },
});

var template = {
  'student|40': [
    {
      'id|+1': 1,
      firstname: '@CFIRST',
      lastname: '@CLAST',
      name: '@firstname@lastname',
      'sex|0-1': 1,
      'age|13-16': 13,
      birthday: '@DATE(MM-dd)',
      type: 0,
      constellation: '@CONSTELLATION',
      address: '@CITY(true)',
      color: '@HEX',
      avator: '@IMAGE(100x100, @color, @firstname)',
    },
  ],
};
var data = Mock.mock(template);
var student = new CreateData(data.student);

module.exports = student;
