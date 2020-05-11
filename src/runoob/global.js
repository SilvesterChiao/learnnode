/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-09 16:05:35
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-09 16:16:15
 */

console.log(__filename)
console.log(__dirname)

// console
console.log('Hello %d', 2020)
console.info('info')
console.error('error')
console.warn('warn')
const dirObj = {
    name: 'SilvesterChiao',
    age: 18,
}
console.time('dirTime')
console.dir(dirObj)
console.timeEnd('dirTime')
console.trace()
const assertValue = 1 < 2
console.assert(assertValue, ' 1 > 2 = true')

// process
