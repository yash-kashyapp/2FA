const path = require('path');
const send = require('../../helpers/create-email-message');
const compile = require('../../helpers/compile-template');

module.exports = function(to, data = {}) {
  try {
    return send({
      to,
      subject: 'Your One-Time Password',
      html: compile(path.resolve(__dirname, './otp-email.hbs'), data)
    })
  } catch (err) {
    console.error(err)
    return false
  }
}
