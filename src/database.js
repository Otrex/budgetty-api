const mongoose = require('mongoose');
const config = require('./config')

const connect = () => {
    console.log(`CONNECTING TO DATABASE SERVER...`)
    const DB = config.db.uri.replace('<password>', config.db.password)
                .replace('<username>', config.db.user)
                .replace('<dbname>', config.db.name)

    mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then((conn)=>{
        console.log(`MONGODB CONNECTED :: @${conn.connection.host}`)
    }).catch((err)=>{
        console.log(`DATABASE CONNECTION FAILED`)
        process.exit(1)
    })
}


module.exports = { connect };