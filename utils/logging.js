const logger = require('../config/logger');

const logging = {
    infoService: (serviceName, request) => {
        const data = JSON.stringify(request);
        logger.info(`${serviceName} invoked! Data: ${data}`);
    },
    errService: (serviceName, error) => {
        logger.error(`${serviceName} error! Error: ${error}`);
    }
}

module.exports = logging;