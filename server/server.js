const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

const booksRouter = require('routes/books-route')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/books', booksRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Server Error')
})

app.use((req, res, next) => {
  res.status(404).send('Resource cannot be found')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})