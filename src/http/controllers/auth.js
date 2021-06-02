const { LoginValidator } = require("../validators")

class AuthController {
    static async login (req, res, next) {
        // Validate Input
        const { email, password } = LoginValidator.check(req.body)

        // Check user exists
        
        // generate jwt
        // send user + jwt
    }
}


module.exports = AuthController