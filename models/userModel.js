const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    answer: {
        type: String,
        required: [true, 'answer is required']
    },
    phone: {
        type: String,
        required: [true, 'phone is required']
    },
    role: {
        type: Number,
        default: 0
    },
    // isArtist: {
    //     type: Boolean,
    //     default: false
    // },
    // firstLogin: {
    //     type: Boolean,
    //     default: false
    // },
}, { timestamps: true })

const User = mongoose.model('Users', userSchema);
module.exports = User