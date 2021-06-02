const router = require('express').Router()

// CONTROLLERS
const AuthController = require('../http/controllers/auth')

router.get('/login', AuthController.login)

module.exports = router