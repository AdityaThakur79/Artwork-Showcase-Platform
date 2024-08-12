const express = require('express')
const artistAuthController = require('../controller/ArtistController')
const formidable = require('express-formidable')

const router = express.Router()

// Register || POST

router.post('/register', formidable(), artistAuthController.registerController)

// login || POST
router.post('/login', artistAuthController.loginController)

// // forgot-password || POST
router.post('/forgot-password', artistAuthController.forgotController)

// // geting the user details so that can be updated further
router.get('/getArtistDetails/:artistId', artistAuthController.getArtistDetails)

// // update-profile ||POST
router.put('/update-profile/:ArtistId', artistAuthController.updateArtistProfileController)

// get-artwork-according-artist || get
router.get('/getArtistArtwork/:ArtistId', artistAuthController.getArtistArtworkController)

//get artist photo controller
router.get('/getArtistPhoto/:ArtistId', artistAuthController.getArtistPhoto)

// below is the route for adding an item into the cart
router.post('/artistAddcart', artistAuthController.addTocart)

// below is the route for getting the cart
router.get('/getCartItems/:ArtistId', artistAuthController.getCartItems)

// below is the route  for deleting th cart item
router.delete('/removeCartItem/:ArtistId/:artWorkId', artistAuthController.removeCartItem)
// below is removing all cart items from the cart
router.delete('/removeAllCartItem/:ArtistId', artistAuthController.removeAllCartItem)
// below both are the routes for the payment integration
// below is the route for the braintree token
router.get('/braintree/token', artistAuthController.braintreeTokenController)
// below is the route for braintree payment
router.post('/braintree/payment', artistAuthController.brainTreePatymentController)

module.exports = router
