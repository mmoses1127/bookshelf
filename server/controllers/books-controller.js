// Import DB
const knex = require('../db');

// Retrieve all books
exports.booksAll = async (req, res) => {
  // Get all books from DB
  knex
    .select('*')
    .from('books')
    .then(userData => {
      // Send all books as a response
      res.json(userData);
    })
    .catch(err => {
      res.json({ message: `Error retrieving books:  ${err}` });
    });
}

// Create new book
exports.booksCreate = async (req, res) => {
  // Add new book to DB
  knex(books)
    .insert({
      'author': req.body.author,
      'title': req.body.title,
      'pubDate': req.body.pubDate,
      'rating': req.body.rating
    })
    .then(() => {
      // Send a successfull response
      res.json({ message: 'Book added successfully' });
    })
    .catch(err => {
      res.json({ message: `Error adding book:  ${err}` });
    });
}

// Remove book
exports.booksRemove = async( req, res) => {
  // Remove book from DB
  knex('books')
    .where('id', req.body.id)
    .del()
    .then(() => {
      // Send a successfull response
      res.json({ message: 'Book removed successfully' });
    })
    .catch(err => {
      res.json({ message: `Error removing book:  ${err}` });
    }
  );
}

// Remove all books
exports.booksReset = async (res, req) => {
  knex
    .select('*')
    .from('books')
    .truncate()
    .then(() => {
      res.json({ message: 'Book list cleared'})
    })
    .catch(err => {
      res.json({ message: `Error clearing books: ${err}` })
    })
}