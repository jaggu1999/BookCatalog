const bookRepository = require('../repositories/bookRepository'); // Import the Book repository

const addBook = async (bookData) => {
  try {
    if (!bookData.soldCount) {
      bookData.soldCount = 0; // Set soldCount to 0 if not provided
    }
    const addedBook = await bookRepository.create(bookData); // Create a new book in the catalog
    return addedBook;
  } catch (error) {
    throw new Error(`Failed to add book to the catalog: ${error.message}`);
  }
};

const listOfCategories = async () => {
  try {
    const categories = await bookRepository.listOfCategories(); // Retrieve all categories present in the catalog
    return categories;
  } catch (error) {
    throw new Error(`Failed to list categories: ${error.message}`);
  }
};

const mostSoldBookByAuthor = async (authorId) => {
  try {
    const mostSoldBook = await bookRepository.mostSoldBookByAuthor(authorId); // Find the most sold book by an author
    return mostSoldBook;
  } catch (error) {
    throw new Error(`Failed to get most sold book by author: ${error.message}`);
  }
};

const mostSoldBookInCategory = async (category) => {
  try {
    const mostSoldBook = await bookRepository.mostSoldBookInCategory(category); // Find the most sold book in a category
    return mostSoldBook;
  } catch (error) {
    throw new Error(`Failed to get most sold book by category: ${error.message}`);
  }
};

const searchBookByTitle = async (partialTitle) => {
  try {
    const books = await bookRepository.searchBookByTitle(partialTitle); // Search books by partial title
    return books;
  } catch (error) {
    throw new Error(`Failed to search books by title: ${error.message}`);
  }
};

const searchBookByAuthor = async (authorName) => {
  try {
    const books = await bookRepository.searchBookByAuthor(authorName); // Search books by author name
    return books;
  } catch (error) {
    throw new Error(`Failed to search books by author name: ${error.message}`);
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