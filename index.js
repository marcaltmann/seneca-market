const seneca = require('seneca')()

const database = process.env.MONGO || 'mongodb://localhost:27017/seneca'

seneca.use('entity')
// .use('jsonfile-store', {
//   folder: './jsons',
// })
.use('mongo-store', {
  name: 'seneca-test',
  host: '127.0.0.1',
  port: 27017,
  options: {},
})

seneca.ready(function() {
  let apple = seneca.make$('fruit')
  apple.name = 'Pink Lady'
  apple.price = 0.99
  apple.save$(function(err, apple) {
    console.log('output', apple, apple.id)
    seneca.close()
  })
})
