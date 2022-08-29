const mongoose = require('mongoose');

const BooksDataSchema = new mongoose.Schema({
    title: String,
    author: String,
    imagePath: String,
    genre: String,
    pages: Number,
    color: String,
    fontColor: String,
    width: String,
    height: String,
    rating: Number,

});


module.exports = mongoose.model('Books', BooksDataSchema);


