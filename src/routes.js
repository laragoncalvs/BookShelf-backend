const express = require('express');

const routes = express.Router();

const BooksController = require('./controllers/BooksController')


routes.get('/books', BooksController.read);
routes.post('/books', BooksController.create);
routes.delete('/books/:id', BooksController.delete);
routes.post('/books/:id', BooksController.update);

module.exports = routes;
