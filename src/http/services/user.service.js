const User = require('../models/User')
const utilities = require('../../providers/utilities')
const { MESSAGE } = require('../../constants')
const { AuthorizationError } = require('../exceptions')
class UserService {
    static async authenticateUser (email, password) {

        const user = await User.findOne({ where : { email }})

        const isValid = await utilities.comparePassword(user.password, password)

        if (!isValid) throw new AuthorizationError(MESSAGE.ERROR.LOGIN)

        return user
    }

    static async getUser (by) {

        const user = await User.findOne({ where : by })

        return user
    }

    static async createNewUser (body) {

        const user = await User.create(body)

        return user
    }
}

module.exports = UserService