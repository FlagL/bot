const mongoose = require('mongoose')

const u = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
        unique: true,
    },
    serverID: {
        type: String,
        required: true,
    },
    coins: {
        type: Number,
        default: 200,
    },
    bank: {
        type: Number
    }
})

module.exports = mongoose.model("UserConfig", u)