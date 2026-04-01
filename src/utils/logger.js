const winston = require('winston');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/test.log');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'ddd MMM DD YYYY HH:mm:ss ZZ' }),
        winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: logFilePath, level: 'info', options: { flags: 'w' }}),
        
    ]
});

module.exports = logger;