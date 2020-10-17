const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: String,
    author: {
        name: String,
        phone: String,
        address: String,
    }
});

const Book = model('books', bookSchema);

module.exports = Book;