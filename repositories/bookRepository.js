const Book =  require('../models/BookModel');

// Function to add a book to the catalog
async function addBook(bookData) {
    try {
        const newBook = new Book(bookData);
        const savedBook = await newBook.save();
        return savedBook;
    } catch (error) {
        throw new Error('Failed to add book to catalog');
    }
}

// Function to get the most sold book by an author
async function mostSoldBookByAuthor(authorId) {
    try {
        const mostSoldBook = await Book.findOne({ authorId }).sort({ soldCount: -1 });
        return mostSoldBook;
    } catch (error) {
        throw new Error('Failed to get most sold book by author');
    }
}

// Function to get the most sold book in a category
async function mostSoldBookInCategory(category) {
    try {
        const mostSoldBook = await Book.findOne({ category }).sort({ soldCount: -1 });
        return mostSoldBook;
    } catch (error) {
        throw new Error('Failed to get most sold book in category');
    }
}

// Function to search for books by partial title
async function searchBookByTitle(partialTitle) {
    try {
        const foundBooks = await Book.find({ title: { $regex: partialTitle, $options: 'i' } });
        return foundBooks;
    } catch (error) {
        throw new Error('Failed to search books by title');
    }
}

// Function to search for books by author name
async function searchBookByAuthor(authorName) {
    try {
        const foundBooks = await Book.find({ authorName: { $regex: authorName, $options: 'i' } });
        return foundBooks;
    } catch (error) {
        throw new Error('Failed to search books by author');
    }
}

module.exports = {
    addBook,
    mostSoldBookByAuthor,
    mostSoldBookInCategory,
    searchBookByTitle,
    searchBookByAuthor,
};