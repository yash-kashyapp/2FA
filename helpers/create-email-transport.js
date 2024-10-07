const nodemailer = require('nodemailer');
const stubTransport = require('nodemailer-stub-transport');

const config = require('./../config/config');

module.exports = function() {
  let transport

  if (config.env === 'test') {
    transport = nodemailer.createTransport(stubTransport())
  } else {
    const { user, pass, host, port } = config.smtp

    const transportOptions = {
      host: host,
      port: port,
      auth: {
        user: user,
        pass: pass
      }
    }

    transport = nodemailer.createTransport(transportOptions)
  }

  return transport
}
