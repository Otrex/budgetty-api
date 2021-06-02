
const mongoose = require('mongoose')

// Plugins
const timestamp = require('./plugins/timestamp')


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique : true,
    },
    password: {
        type: String,
        required: true
    },
    passwordResetToken:{
        type: String
    },
    passwordResetExpires:{
        type: String
    },
    verificationCode:{
        type: String
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    verificationCodeExpires:{
        type: String, default: Date
    },
    role: {
        type: String,
        default: "user"
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    },
    wallet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet'
    },
    active: {
        type: Boolean,
        default: false
    }
})

userSchema.plugin(timestamp)

const userModel = mongoose.model('User', userSchema)

module.exports= userModel;