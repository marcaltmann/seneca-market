module.exports = function api(options) {
  this.add('role:api,path:appversion', function(msg, respond) {
    this.act('role:application,cmd:version', respond)
  })

  this.add('init:api', function (msg, respond) {
    this.act('role:web',{routes:{
      prefix: '/api',
      pin:    'role:api,path:*',
      map: {
        appversion: { GET: true }
      }
    }}, respond)
  })

}
