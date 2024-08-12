const { default: slugify } = require('slugify')
const artworkModel = require('../models/artworkModel')
const fs = require('fs')
const artistModel = require('../models/ArtistModel')
const mongoose = require('mongoose')

// below is the route for creating the product
const createPostController = async (req, res) => {

    try {
        const { name, description, category, price, dimension, shippingDetails, artist } = req.fields;
        const { photo } = req.files;
        switch (true) {
            case !name: {
                return res.status(500).send({ error: 'name is required' })
            }
            case !description: {
                return res.status(500).send({ error: 'description is required' })
            }
            case !category: {
                return res.status(500).send({ error: 'category is required' })
            }
            case !price: {
                return res.status(500).send({ error: 'price is required' })
            }
            case !dimension: {
                return res.status(500).send({ error: 'dimension is required' })
            }
            case !shippingDetails: {
                return res.status(500).send({ error: 'shipping Details is required' })
            }
            case !photo: {
                return res.status(500).send({ error: 'photo is required' })
            }
            case !artist: {
                return res.status(500).send({ error: 'artist is required' })
            }
        }


        const post = new artworkModel({ ...req.fields, keyword: slugify(name) })

        if (photo) {
            post.photo.data = fs.readFileSync(photo.path)
            post.photo.contentType = photo.type
        }
        // console.log(req.headers)
        // const id = req.headers['artistid'];
        // console.log(id)
        const { artistid } = req.params


        const existingArtist = await artistModel.findById(artistid)
        console.log(existingArtist)
        if (!existingArtist) {
            return res.status(404).send({
                success: false,
                message: 'Artist is not available'
            })
        }
        // starting the mongoose transaction
        const session = await mongoose.startSession()
        session.startTransaction()
        await post.save({ session });
        existingArtist.post.push(post);

        await existingArtist.save({ session });
        await session.commitTransaction();
        await post.save()
        res.status(201).send({
            success: true,
            message: 'post has been created successfully',
            // post  
        })

    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: 'error while creating the post'
            })
    }
}

// below is the controller is for getting all post
const getAllPostController = async (req, res) => {
    try {
        const post = await artworkModel.find({}).populate('category', 'artist').select('-photo').limit(20).sort({ createdAt: -1 })
        res.status(200).send({
            success: true,
            totalCount: post.length,
            message: 'All products fetched successfully',
            post,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'something went wrong while fetching the product',
            error
        })
    }
}

// below is the route for getting the single post
const getSinglePostController = async (req, res) => {
    try {
        const { pid } = req.params;
        const post = await artworkModel.findById(pid).select('-photo').populate('category', 'artist')
        res.status(200).send({
            success: true,
            message: 'single post has been fetched successfully',
            post

        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'something went wrong while fetching the single post'
        })
    }
}

// below is the controller for getting the post photo

const getPostPhoto = async (req, res) => {
    try {
        const post = await artworkModel.findById(req.params.pid).select("photo")
        if (post?.photo?.data) {
            res.set("Content-type", post.photo.contentType)
            res.status(200).send(post.photo.data)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'somethig went wrong while getting the photo',
            error
        })
    }
}


// below is the controller for deleting the post

const deletePostController = async (req, res) => {
    try {
        const post = await artworkModel.findByIdAndDelete(req.params.pid).select('-photo').populate('artist')
        await post.artist.post.pull(post);
        await post.artist.save()
        res.status(200).send({
            success: true,
            message: 'post has been deleted successfully',

        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong while deleting the post'
        })
    }
}



module.exports = { createPostController, getAllPostController, getSinglePostController, getPostPhoto, deletePostController }