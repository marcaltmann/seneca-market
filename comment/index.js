const seneca = require('seneca')();

seneca
  .use('comment')
  .listen({type: 'tcp', pin: 'role:comment'});
