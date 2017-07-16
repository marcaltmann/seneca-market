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
  seneca.add({cmd: 'salestax'}, function(msg, done) {
    let rate  = 0.19
    let total = msg.net * (1 + rate)
    done(null, {total: total})
  })

  seneca.act({cmd: 'salestax', net: 59.23}, function(err, result) {
    let apple = seneca.make$('fruit')
    apple.name = 'Pink Lady'
    apple.price = result.total
    apple.save$(function(err, apple) {
      console.log('output', apple, apple.id)
      seneca.close()
    })
    console.log(result.total)
  })
})
