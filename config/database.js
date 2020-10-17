require('dotenv').config();

const mongoose = require('mongoose');
const logger = require('./logger');

const MONGO_URI = process.env.MONGO_URI;

const database = {
    connect: async () => {
        await mongoose
            .connect(
                MONGO_URI,
                {
                    useCreateIndex: true,
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                }
            )
            .then(() => logger.warn('Database Connected!'))
            .catch(err => logger.error(err));
    }
}


module.exports = database;