const mongoose = require('mongoose')
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`mongodb connected ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`error occured in ${error}`)
    }
}

module.exports = connectToDb