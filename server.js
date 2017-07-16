const seneca = require('seneca')()

seneca
  .use('application')
  .listen({type: 'tcp', pin: 'role:application'})
