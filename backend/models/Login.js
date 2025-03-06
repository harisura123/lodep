const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const MongooseLogin = mongoose.model('userUp', Login)

module.exports = MongooseLogin