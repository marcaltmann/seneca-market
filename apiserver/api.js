module.exports = function api(options) {
  this.add('role:api,path:appversion', function(msg, respond) {
    this.act('role:appversion,cmd:version', respond);
  });

  this.add('role:api,path:storecomment', function(msg, respond) {
    let parsedBody = JSON.parse(msg.args.body);
    let comment = parsedBody.comment;
    this.act('role:comment,cmd:store', respond);
  });

  this.add('init:api', function (msg, respond) {
    this.act('role:web',{
      routes: {
        prefix: '/api',
        pin:    'role:api,path:*',
        map: {
          appversion: { GET: true },
          storecomment: { POST: true },
        },
      },
    }, respond);
  });
};
