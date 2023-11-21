const AuthorService = require('../services/authorService');

// Add an author
const addAuthor = async (req, res) => {
  try {
    const { name, phoneNumber, birthDate, deathDate } = req.body;
    const result = await AuthorService.addAuthor(name, phoneNumber, birthDate, deathDate);
    res.status(201).json({ status: 'success', data: result });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

// List all the authors
const listAllAuthors = async (req, res) => {
  try {
    const authors = await AuthorService.listAllAuthors();
    res.status(200).json({ status: 'success', data: authors });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

module.exports = {
  addAuthor,
  listAllAuthors,
};