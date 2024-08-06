const express = require('express')
const router = express.Router()
const artController = require('../controller/artController')
const formidable = require('express-formidable')
router.post('/create-artwork/:artistid', formidable(), artController.createPostController)
router.get('/get-post', artController.getAllPostController)
router.get('/get-single-post/:pid', artController.getSinglePostController)
router.get('/post-photo/:pid', artController.getPostPhoto)
router.delete('/delete-post/:pid', artController.deletePostController)


module.exports = router