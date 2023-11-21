const BookService = require('../services/bookService');

// Add a book to the catalog
const addBook = async (req, res) => {
    try {
        const {
            title,
            authorId,
            publisher,
            publishDate,
            category,
            price,
            soldCount = 0, // if not provided, setting it to 0
        } = req.body;
        const result = await BookService.addBook(title, authorId, publisher, publishDate, category, price, soldCount);
        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};

// List all the categories
const listOfCategories = async (req, res) => {
    try {
        const categories = await BookService.listOfCategories();
        res.status(200).json({ status: 'success', data: categories });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};

// Most books sold by an author
const mostSoldBookByAuthor = async (req, res) => {
    try {
        const { authorId } = req.params;
        const result = await AuthorService.mostSoldBookByAuthor(authorId);
        res.status(200).json({ status: 'success', data: result });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};

// Most books sold under a given category
const mostSoldBookInCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const result = await BookService.mostSoldBookInCategory(category);
        res.status(200).json({ status: 'success', data: result });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};

// Search a book in the catalog by title
const searchBookByTitle = async (req, res) => {
    try {
        const { searchTerm } = req.params;
        const result = await BookService.searchBookByTitle(searchTerm);
        res.status(200).json({ status: 'success', data: result });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};

// Search a book in the catalog by author name
const searchBookByAuthor = async (req, res) => {
    try {
        const { searchTerm } = req.params;
        const result = await BookService.searchBookByAuthor(searchTerm);
        res.status(200).json({ status: 'success', data: result });
    } catch (error) {
        res.status(400).json({ status: 'error', message: error.message });
    }
};

module.exports = {
    addBook,
    listOfCategories,
    mostSoldBookByAuthor,
    mostSoldBookInCategory,
    searchBookByTitle,
    searchBookByAuthor,
};
