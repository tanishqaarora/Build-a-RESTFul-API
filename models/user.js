const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;