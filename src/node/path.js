const path = require('path')

const notes = '/users/Dema/notes.txt'

console.log(`dirname: ${path.dirname(notes)}`)
console.log(`basename: ${path.basename(notes)}`)
console.log(`extname: ${path.extname(notes)}`)
console.log(`name: ${path.basename(notes, path.extname(notes))}`)

const name = 'Stanfa'
console.log(path.join('/', 'users', name, 'notes.txt'))

console.log(path.resolve('Elimy.txt'))
console.log(path.resolve('tmp', 'Elimy.txt'))
console.log(path.resolve('/etc', 'Elimy.txt'))

console.log(path.normalize('/users/joe/..//test.txt'))
