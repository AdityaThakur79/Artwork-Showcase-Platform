const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const requireSignin = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        console.log(decode);
        next()
    } catch (error) {
        console.log(error)
    }
}

const isAdmin = async (req, res, next) => {
    try {
        console.log(req.user.id)
        const user = await userModel.findById(req.user.id)
        if (user?.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "not an admin"
            })
        }
        else {
            next();
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { requireSignin, isAdmin }