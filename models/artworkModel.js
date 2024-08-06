const mongoose = require('mongoose')
const fs = require('fs')

// creating the schema
const artworkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'category',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    dimension: {
        type: String,
        required: true
    },
    shippingDetails: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: 'Artist',
        required: true,
    },
    artistName: {
        type: String,
    }
})
// making the model
const artWork = mongoose.model('artWork', artworkSchema)
module.exports = artWork