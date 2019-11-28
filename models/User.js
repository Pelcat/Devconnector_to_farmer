const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    // add aditional new criteria in here
    mobile: {
        type: String,
    },
    street: {
        type: String,
        required: true
    },
    suburb: {
        type: String,
    },
    postcode: {
        type: String,
        required: true
    },


    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);