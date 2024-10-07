const crypto = require('crypto');

module.exports = function(bytes = 20) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(bytes, function(err, buf) {
      var token = buf.toString('hex')
      if (err) {
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}
