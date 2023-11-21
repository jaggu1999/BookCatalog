const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.post('/', authorController.addAuthor);
router.get('/', authorController.listAllAuthors);

module.exports = router;