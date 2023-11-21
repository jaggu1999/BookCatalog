const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  soldCount: {
      type: Number,
      default: 0,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
