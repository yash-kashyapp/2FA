const winston = require('winston')

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: './../subscriber.log' })
  ]
})

module.exports = logger
