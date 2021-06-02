const GenericValidator =  require("./core")
const { ValidationError } = require("../exceptions")
const Validator = require('fastest-validator')

class LoginValidator extends GenericValidator{
    static schema = {}
}

class RegistrationValidator extends GenericValidator{
    static schema = {}
}

class EmailVerifierValidator extends GenericValidator{
    static schema = {}
}

class PasswordResetValidator extends GenericValidator{
    static schema = {}
    static sendTokenSchema = {}
    // static sendTokenCheck (data) {
    //     let error = PasswordResetValidator.sendTokenSchema ?
    //         Validator.compile(GenericValidator.schema)(data): ERROR_MSG.VALIDATION.NO_SCHEMA
    //     if ( error != true ) throw new ValidationError(error)

    //     return data
    // }
}


module.exports = {
    LoginValidator,
    RegistrationValidator
}