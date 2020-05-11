/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-09 15:43:55
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-09 15:45:52
 */

var server = require('./server')
var router = require('./router')

server.start(router.route)
