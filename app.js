module.exports = function app(options) {
  this.add('role:app,cmd:version', function(msg, done) {
    let version = 'v0.0.1'
    done(null, {version:version})
  })
}
