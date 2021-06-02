const router = require('express').Router()

// CONTROLLERS
const AuthController = require('../http/controllers/auth')

router.get('/login', AuthController.login)

router.get('/register', AuthController.register)

module.exports = router