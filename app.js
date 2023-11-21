const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();


// Middleware
app.use(express.json());

// Routes
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then((client) => {
    console.log('Connected to MongoDB');
    const db = client.db('book_catalog');

    // Pass the db object to the repositories
    const authors = authorRepository(db);

    app.use('/authors', authorRoutes(authors));
    app.use('/books', bookRoutes(db));

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



// app.use('/authors', authorRoutes);
// app.use('/books', bookRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
