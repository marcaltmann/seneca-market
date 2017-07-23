module.exports = function comment(options) {
  this.add('role:comment,cmd:store', function(msg, done) {
    console.log(msg);
    done(null, {success: true});
  });
};
