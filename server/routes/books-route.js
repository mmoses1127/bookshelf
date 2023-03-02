const express = require('express')
const booksRoutes = require('../controllers/books-controller.js')

const router = express.Router();

router.get('/all', booksRoutes.booksAll)

router.post('/create', booksRoutes.booksCreate)

router.put('/delete', booksRoutes.booksRemove)

router.put('/reset', booksRoutes.booksReset)

module.exports = router