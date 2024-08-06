const express = require('express')
const authController = require('../controller/userController')


const router = express.Router()

// Register || POST

router.post('/register', authController.registerController)

// login || POST
router.post('/login', authController.loginController)

// forgot-password || POST
router.post('/forgot-password', authController.forgotController)

// geting the user details so that can be updated further
router.get('/getUserDetails/:user', authController.getUserDetails)
// update-profile ||POST
router.put('/update-profile/:userId', authController.updateUserProfileController)

// check-artist || PUT
// router.put('/check-artist/:userId', authController.checkArtistController)

module.exports = router
