const mongoose = require('mongoose');
const ArtistSchema = new mongoose.Schema({
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
    photo: {
        data: Buffer,
        ContentType: String,

    },
    answer: {
        type: String,
        required: [true, 'answer is required']
    },
    phone: {
        type: String,
        required: [true, 'phone is required']
    },
    address: {
        type: String,
        required: [true, 'address is required']
    },
    achievement: {
        type: Array,
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    event: {
        type: Array
    },
    exhibition: {
        type: Array
    },
    instagram: {
        type: String,

    },
    facebook: {
        type: String,

    },
    twitter: {
        type: String,

    },
    cart: {
        type: Array
    },
    wishlist: {
        type: Array
    },
    favourites: {
        type: Array
    },
    post: [
        {
            type: mongoose.Types.ObjectId,
            ref: "artWork"
        },]


}, { timestamps: true })

const Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist