module.exports = function application(options) {
  this.add('role:application,cmd:version', function(msg, done) {
    let version = 'v0.0.1'
    done(null, {version:version})
  })
}
