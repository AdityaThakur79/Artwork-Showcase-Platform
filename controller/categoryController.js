const slugify = require('slugify')
const categoryModel = require('../models/categoryModel')
const artworkModel = require('../models/artworkModel')

const categoryCreateController = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(401).send({
                success: false,
                message: 'name is required'
            })
        }

        const existingUser = await categoryModel.findOne({ name: name })
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'category already included'
            })
        }

        const category = new categoryModel({ name, keyword: slugify(name) })
        category.save()

        res.status(201).send({
            success: true,
            message: 'category created successfully',
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'something went wrong while creating category'
        })
    }
}

// updating the category

const categoryUpdateController = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { name } = req.body;
        const category = await categoryModel.findByIdAndUpdate(categoryId, { name: name, keyword: slugify(name) }, { new: true })
        res.status(201).send({
            success: true,
            message: 'category updated successfully',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'something went wrong while updating category'
        })
    }
}


// getting all category 

const getAllCategoryController = async (req, res) => {
    try {
        const data = await categoryModel.find({});
        res.status(200).send({
            success: true,
            message: 'categories fetched successfully',
            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'something went wrong while fetching all category'
        })
    }
}

// getting the single category
const getSingleCategoryController = async (req, res) => {
    try {
        const { categoryId } = req.params
        const data = await categoryModel.findById(categoryId);
        res.status(200).send({
            success: true,
            message: 'single category fetched',
            data
        })
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success: false,
            message: 'something went wrong while fetching single category'
        })
    }
}

// deleting the category
const deleteCategoryController = async (req, res) => {
    try {
        const { categoryId } = req.params
        const data = await categoryModel.findByIdAndDelete(categoryId)
        res.status(200).send({
            success: true,
            message: 'category deleted successfully',
            data
        })
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success: false,
            message: 'something went wrong while deleting category'
        })
    }
}
// below is the controller for getting the artworks be category
const getArtByCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const art = await artworkModel.find({
            category: id
        }).select('-photo').populate('category')
        await res.status(200).send({
            success: true,
            message: 'art by category fetched successfully',
            art,
            artcount: art.length,

        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'error while getting the art by category',
            success: false
        })
    }
}
module.exports = { categoryCreateController, categoryUpdateController, getAllCategoryController, getSingleCategoryController, deleteCategoryController, getArtByCategory }
