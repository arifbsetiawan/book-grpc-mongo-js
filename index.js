require('dotenv').config();

const path = require('path');
const Server = require('./config/server');
const logger = require('./config/logger');
const BookService = require('./services/BookService');
const database = require('./config/database');

const APP = process.env.APP_NAME || 'Service';
const URI = process.env.APP_URI || '127.0.0.1';
const PORT = process.env.APP_PORT || 3000;

const bookPath = path.join(__dirname, '/protos/book.proto');

const server = new Server(APP, URI, PORT);

const startServer = async () => {
    try {
        await database.connect();

        const bookProto = await server.loadProto(bookPath, 'BookService', 'book');

        await server.setService(bookProto, BookService);

        await server.listen();
    } catch (error) {
        logger.error(error.message);
    }
}

startServer();