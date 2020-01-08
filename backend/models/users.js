const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    _id : {
        type: mongoose.Types.ObjectId,
        required: true,
        default: new mongoose.Types.ObjectId()
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    phoneNumber : {
        type: String,
        required: true,
        unique: true
    }

})

module.exports = mongoose.model('users', usersSchema)