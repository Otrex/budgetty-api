module.exports = {
    app : {
        port : process.env.PORT,
        secret : process.env.SECRET,
        name : process.env.NAME
    },
    db : {
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        name : process.env.DB_NAME,
        uri : process.env.DB_URI
    }
}