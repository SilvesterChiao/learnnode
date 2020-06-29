/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-26 15:16:16
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-26 17:43:06
 */

var Mock = require('mockjs')
var data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1,
        'name': '',
    }]
})

module.exports = {
    data,
};
