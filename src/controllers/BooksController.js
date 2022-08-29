const Books = require('../models/BooksData');

module.exports = {

        async read (req, res){
            const booksList = await Books.find();
            return res.json(booksList);
        },

        async create (req, res){
            const {title, author, imagePath, pages, genre, color, fontColor, width, height, rating} = req.body;

            if(!title || !author) {
                return res.status(400).json({error: "fields required"})
            }
    
            const bookCreated = await Books.create({
                title, 
                author,
                imagePath, 
                pages, 
                genre,
                color,
                fontColor,
                width,
                height, 
                rating
            });

            return res.json(bookCreated);
        },

        async delete (req, res){
            const { id } = req.params;

            const bookDeleted = await Books.findOneAndDelete({_id: id});

            return res.json(bookDeleted);
        },

        async update (req, res) {
            const { id } = req.params;
            const { rate } = req.body;

            const book = await Books.findOne({_id: id});

            if(rate) {
                book.rate = rate;
                await book.save();
            }

            return res.json(book);
        }
}