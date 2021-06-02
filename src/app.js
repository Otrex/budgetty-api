const express = require('express')
const cors = require('cors')
const path = require('path')
const { PRODUCTION } = require('./constants')
const config = require('./config')

const { 
    errorHandler, 
    pageNotFound,
    logVisited
} = require('./http/middlewares/error.handler')

const app = express()

/* MIDDLEWARES */
app.use(cors)

app.use(express.static(path.join(__dirname, 'static')))

if (config.app.env !== PRODUCTION ) app.use(logVisited)

/* ROUTES */
app.use('/auth', require('./routes/auth'))

/* EXCEPTION HANDLERS */
app.use(errorHandler)

app.use(pageNotFound)

module.exports = app