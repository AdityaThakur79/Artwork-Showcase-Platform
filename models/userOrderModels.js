const mongoose = require('mongoose')

const userOrderSchema = new mongoose.Schema({
    // products and user ka name store karayenge
    artworks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artWork'
    },],
    payment: {},
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist",

    },
    // status: {
    //     type: String,
    //     default: 'Not Processed',
    //     enum: ["Not processed", 'Processing', 'Cancelled', 'Shipped', 'Delivered']
    // }
}, { timestamps: true })

const userOrder = mongoose.model('userOrder', userOrderSchema)
module.exports = userOrder