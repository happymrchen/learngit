const mongoose = require("mongoose")
const Schema = mongoose.Schema
const superUser = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('superUser', superUser)
