const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.comparePassword = async (p1, p2) => bcrypt.compare(p1, p2)

exports.generateToken = (payload) =>  jwt.sign(payload, config.app.secret)