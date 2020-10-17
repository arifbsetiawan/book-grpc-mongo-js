require('dotenv').config();

const pino = require('pino');

const logger = pino({
    name: process.env.APP_NAME || 'Service',
    prettyPrint: {
        colorize: true,
        translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l o',
    }
});

module.exports = logger;