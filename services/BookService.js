const Book = require('../models/Book');
const { err500, err404, err400 } = require('../utils/callback');
const { infoService } = require('../utils/logging');

const BookService = {
    index: async (call, callback) => {
        const label = 'BookService#Index',
            req = call.request;
        
        infoService(label, req);

        try {
            let books = await Book.find().exec();

            return callback(null, {
                message: 'Book list',
                books
            });
        } catch (error) {
            return callback(err500(error.message));
        }
    },
    get: async (call, callback) => {
        const label = 'BookService#Get',
            req = call.request;
        
        infoService(label, req);

        try {
            let book = await Book.findById(req.id).exec();

            return callback(null, {
                message: 'Get Book',
                book
            });
        } catch (error) {
            return callback(err500(error.message));
        }
    },
    add: async (call, callback) => {
        const label = 'BookService#Add',
        req = call.request;
    
        infoService(label, req);

        try {
            let data = {
                title: req.title,
                author: {
                    name: req.name,
                    phone: req.phone,
                    address: req.address,
                }
            };

            let book = await new Book(data).save();

            return callback(null, {
                message: 'Book Added',
                book,
            });
            
        } catch (error) {
            return callback(err500(error.message));
        }
    },
    update: async (call, callback) => {
        const label = 'BookService#Update',
        req = call.request;
    
        infoService(label, req);

        try {
            let data = {
                title: req.title,
                author: {
                    name: req.name,
                    phone: req.phone,
                    address: req.address,
                }
            };

            let book = await Book.findByIdAndUpdate(req.id, {$set:data}, {new: true, runValidators: true}).exec();

            return callback(null, {
                message: 'Book Updated',
                book,
            });
            
        } catch (error) {
            return callback(err500(error.message));
        }
    },
    delete: async (call, callback) => {
        const label = 'BookService#Delete',
        req = call.request;
    
        infoService(label, req);

        try {
            let book = await Book.findByIdAndDelete(req.id).exec();
            
            if(!book)
                return callback(err400());

            return callback(null, {
                message: 'Book Updated',
            });
            
        } catch (error) {
            return callback(err500(error.message));
        }
    },
}

module.exports = BookService;