const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `logs/%DATE%.log`,
  datePattern: 'YYYY-MM-DD'
});

const errorLog = createLogger({
  
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    dailyRotateFileTransport
  ]
});

module.exports = errorLog;
