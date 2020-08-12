/*
 * @Author: SilvesterChiao
 * @Date: 2020-07-01 10:40:54
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-07-01 10:47:17
 */

const { mock } = require('mockjs');

const data = mock({
    data: {
        list: [
            {
                'id|+1': 1,
                title: '@FIRST'
            }
        ],
    }
})

module.exports = {
    data,
}
