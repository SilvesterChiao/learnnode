/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-26 15:16:22
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-07-01 10:51:50
 */

var { mock, Random } = require('mockjs');

Random.extend({
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations);
    }
})

var data = mock({
    'list|20' : [
        {
            'id|+1': 1,
            firstName: '@CFIRST',
            lastName: '@CLAST',
            fullName: '@firstName@lastName'
        }
    ]
})


module.exports = {
    data,
};
