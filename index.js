require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const { errorHandler } = require('./middlewares')

const app = express()

app.use(bodyParser.json())
app.use('/api', routes)
app.use(errorHandler)

const { MONGO_DB_CONNECT } = process.env;

if (process.env.NODE_ENV !== 'test') {
  mongoose.set('strictQuery', false)
  mongoose.connect(MONGO_DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  app.listen(8080,
    () => console.log('Server started at 8080.'))
}

exports.app = app
