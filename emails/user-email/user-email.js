const path = require('path');
const send = require('../../helpers/create-email-message');
const compile = require('../../helpers/compile-template');

module.exports = function(to, data = {}) {
  try {
    return send({
      to,
      subject: 'Email Verification Required',
      html: compile(path.resolve(__dirname, './user-email.hbs'), data)
    })
  } catch (err) {
    console.error(err)
    return false
  }
}
