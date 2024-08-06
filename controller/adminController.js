const userModel = require('../models/userModel')
const artistModel = require('../models/ArtistModel')
const getAllUser = async (req, res) => {
    try {
        const user = await userModel.find({});
        res.status(200).send({
            success: true,
            message: 'users fetched successfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'something went wrong in fetching the user details',
            error
        })
    }
}

const getAllArtistController = async (req, res) => {
    try {
        const artist = await artistModel.find({})
        res.status(200).send({
            success: true,
            message: 'artist details fetched successfully',
            artist
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong in getting artist details',
            error
        })
    }
}

module.exports = { getAllUser, getAllArtistController }