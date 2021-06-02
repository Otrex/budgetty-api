const UserService = require("../services/user.service")
const { LoginValidator, RegistrationValidator } = require("../validators")
const utilities = require("../../providers/utilities")
const { AuthenticationError } = require("../exceptions")
const { MESSAGE } = require("../../constants")

class AuthController {
    static async login (req, res, next) {
        // Validate Input
        const { email, password } = LoginValidator.check(req.body)

        // Check user exists
        const user = await UserService.authenticateUser(email, password)
        
        // generate jwt
        const token = utilities.generateToken({ id : user._id })

        // send user + jwt
        return res.status(200).json({
            token,
            user
        })
    }

    static async register (req, res, next) {
        // Validate Input
        const data = RegistrationValidator.check(req.body)

        // Check user exists
        const user = await UserService.getUser({ email: data.email })

        if (user) throw new AuthenticationError(MESSAGE.ERROR.ALREADY_EXISTS)

        const newUser = await UserService.createNewUser(data)
        
        // generate jwt
        const token = utilities.generateToken({ id : user._id })

        // send user + jwt
        return res.status(200).json({
            token,
            user : newUser
        })
    }
}


module.exports = AuthController