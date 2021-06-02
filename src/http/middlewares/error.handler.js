const errorHandler = ( err, req, res, next ) => {
    next()
}

const pageNotFound = ( req, res, next ) => {
    next()
}

const logVisited = ( req, res, next ) => {
    console.log(`VISITING :: ${req.url}`)
    next()
}

module.exports = {
    errorHandler,
    pageNotFound,
    logVisited,
}
