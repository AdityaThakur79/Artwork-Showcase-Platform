const express = require('express');
const router = express.Router()
const userModel = require('../models/userModel')
const adminController = require('../controller/adminController')
const { isAdmin, requireSignin } = require('../middlewares/authMiddleware')
// below we are creating the routes

router.get('/getAllUser', requireSignin, isAdmin, adminController.getAllUser)
router.get('/getAllArtist', requireSignin, isAdmin, adminController.getAllArtistController)
module.exports = router;