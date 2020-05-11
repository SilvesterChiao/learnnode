/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-09 15:43:43
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-09 15:52:35
 */

var http = require('http')
var url = require('url')

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname
        // console.log(url.parse(request.url))
        console.log(`Request for ${pathname} received.`)

        route(pathname)

        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.write('Hello World!\n')
        response.write(`The pathname: ${pathname}`)
        response.end()
    }

    http.createServer(onRequest).listen(5000)
    console.log('Server has started.')
}

exports.start = start
