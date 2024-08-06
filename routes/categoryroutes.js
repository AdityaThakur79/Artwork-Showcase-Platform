const express = require('express')
const router = express.Router()
const categoryController = require('../controller/categoryController')
const { isAdmin, requireSignin } = require('../middlewares/authMiddleware')

router.post('/create-category', categoryController.categoryCreateController)
router.put('/update-category/:categoryId', categoryController.categoryUpdateController)
router.get('/getAllCategory', categoryController.getAllCategoryController)
router.get('/getSingleCategory/:categoryId', categoryController.getSingleCategoryController)
router.delete('/deleteCategory/:categoryId', categoryController.deleteCategoryController)
router.get('/getArtByCategory/:id', categoryController.getArtByCategory)
module.exports = router