const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  deathDate: {
    type: Date,
  },
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;