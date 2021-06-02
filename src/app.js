const express = require('express')
const cors = require('cors')

const { 
    errorHandler, 
    pageNotFound 
} = require('./http/middlewares/error.handler')

const app = express()

/* MIDDLEWARES */
app.use(cors)

/* ROUTES */
app.use('/auth', require('./routes/auth'))

/* EXCEPTION HANDLERS */
app.use(errorHandler)

app.use(pageNotFound)

module.exports = app