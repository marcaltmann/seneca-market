const seneca = require('seneca')()

seneca
  .client({type: 'tcp', pin: 'role:application'})
  .act('role:application,cmd:version', function(err, result) {
    console.log(result.version)
  })
