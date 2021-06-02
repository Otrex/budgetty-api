const dotenv = require('dotenv')

const path =  require('path')

dotenv.config(path.join(__dirname, '../.env'))

const app = require('./app')

const config = require('./config')

require('./database').connect()

app.listen(config.app.port, () => {

    console.log(`SERVER STARTED ::: PORT=${config.app.port}`)

})