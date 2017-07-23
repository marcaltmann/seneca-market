const seneca = require('seneca')();

seneca
  .use('appversion')
  .listen({type: 'tcp', pin: 'role:appversion'});
