/*
 * @Author: SilvesterChiao
 * @Date: 2020-07-01 10:45:53
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-07-01 10:52:18
 */

const { mock } = require('mockjs');
const articleTypeList = require('./articleTypeList');

const data = mock({
    data: {
        list: [],
        type: () => {
            return this.pick(articleTypeList);
        }
    }
})

module.exports = {
    data,
}
