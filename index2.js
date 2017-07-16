const seneca = require('seneca')()

seneca.add({cmd: 'salestax'}, function(msg, done) {
  let rate  = 0.19
  let total = msg.net * (1 + rate)
  done(null, {total: total})
})

seneca.add({cmd: 'version'}, function(msg, done) {
  let version = 'v0.0.1'
  done(null, {version})
})

seneca.act({cmd: 'salestax', net: 59.23}, function(err, result) {
  console.log(result.total)
})

seneca.act('cmd:version', function(err, result) {
  console.log(result.version)
})
