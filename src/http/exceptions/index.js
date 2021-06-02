const AppError = require('./core')

class AuthenticationError extends AppError {
    constructor(message) {
        super(message, 401);
    }
}

class AuthorizationError extends AppError {
    constructor(message) {
        super(message, 403);
    }
}

class ValidationError extends AppError {
    constructor(errors) {
        super(errors, 400);
    }
}

class DataBaseError extends AppError {
    constructor(errors, cb) {
        super(errors, 400);
        cb()
    }
}

module.exports = {
    ValidationError
}