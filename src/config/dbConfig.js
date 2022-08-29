const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://dbUser:b4Dej6yKOLvRGv2P@cluster0.fbkwask.mongodb.net/Books?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;

