const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/add-book', bookController.addBook);
router.get('/categories', bookController.listOfCategories);
router.get('/most-sold-by-author/:authorName', bookController.mostSoldBookByAuthor);
router.get('/most-sold-in-category/:category', bookController.mostSoldBookInCategory);
router.get('/search-by-title/:title', bookController.searchBookByTitle);
router.get('/search-by-author/:authorName', bookController.searchBookByAuthor);

module.exports = router;