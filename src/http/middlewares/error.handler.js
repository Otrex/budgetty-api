const errorHandler = ( req, res, next ) => {
    next()
}

const pageNotFound = ( req, res, next ) => {
    next()
}


module.exports = {
    errorHandler,
    pageNotFound
}
