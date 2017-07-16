const seneca = require('seneca')()

seneca
  .client()
  .act('role:app,cmd:version', function(err, result) {
    console.log(result.version)
  })
