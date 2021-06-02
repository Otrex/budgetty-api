const {ValidationError} = require("../../exceptions")
const Validator = require('fastest-validator')
const { MESSAGE } = require('../../../constants')

class GenericValidator {
    static schema = {}
    static check (data) {
        let error = GenericValidator.schema ?
            Validator.compile(GenericValidator.schema)(data): MESSAGE.ERROR.VALIDATION.NO_SCHEMA
        if ( error != true ) throw new ValidationError(error)

        return data
    }
}

module.exports = GenericValidator
