const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

// below is the controller for register
const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res
                .status(200)
                .send({ success: false, message: "user already exist" });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        req.body.password = hashedpassword;
        const newUser = await userModel(req.body);
        await newUser.save();
        return res
            .status(201)
            .send({ success: true, message: "registration successful" });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while registeration",
        });
    }
};
// login controller
const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).send({
                success: false,
                message: 'invalid email or password'
            })
        }

        const ismatch = await bcrypt.compare(req.body.password, user.password);
        if (!ismatch) {
            return res.status(400).send({
                success: false,
                message: 'invalid username or password'
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' })
        // console.log(token)
        res.status(200).send({ success: true, message: 'login successfull', token, user })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error in the login',

        })
    }
};

// forgot password controller
const forgotController = async (req, res) => {
    try {
        const { email, newpassword, answer } = req.body
        if (!email) {
            return res.status(400).send({ message: 'email is required' })
        }
        if (!answer) {
            return res.status(400).send({ message: 'answer is required' })
        }
        if (!newpassword) {
            return res.status(400).send({ message: 'new password is required' })
        }

        const user = await userModel.findOne({ email, answer })

        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'user not found'
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(newpassword, salt);
        await userModel.findByIdAndUpdate(user._id, { password: hashed })

        return res.status(200).send({
            success: true,
            message: 'password changed successfully'
        })

    } catch (error) {
        console.log(error),
            res.status(500).send({
                success: false,
                message: 'Something went Wrong',
                error
            })
    }
}
// below is the controller for getting the user details

const getUserDetails = async (req, res) => {
    try {

        const { user } = req.params
        // console.log('user at controller is', user)
        const data = await userModel.findById({ _id: user })
        res.status(200).send({
            success: true,
            message: 'details fetched successfully',
            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'something went wrong',
            error
        })
    }
}
// below is the controller for updating the profile
const updateUserProfileController = async (req, res) => {
    try {
        // destructuring the data
        const { name, password, phone, answer } = req.body;
        const { userId } = req.params;
        const user = await userModel.findOne({ _id: userId })

        const salt = await bcrypt.genSalt(10);

        const hashedpassword = password ? await bcrypt.hash(password, salt) : undefined
        console.log(user)
        const updatedUser = await userModel.findOneAndUpdate(user?._id, {
            name: name || user.name,
            password: hashedpassword || user.password,
            phone: phone || user.phone,
            answer: answer || user.answer

        }, { new: true })

        res.status(200).send({
            success: true,
            message: 'profile updated successfully',
            updatedUser
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: 'something went wrong while updating the profile',
            error
        })
    }
}


// check wheather artist or not controller

// const checkArtistController = async (req, res) => {
//     try {
//         // here we are getting the user Id from the params and making it true
//         const { userId } = req.params
//         // console.log(userId)
//         const data = await userModel.findByIdAndUpdate(userId, { isArtist: 'true' }, { new: true })
//         console.log(data)
//         res.status(200).send({
//             success: true,
//             message: 'artist updated successfully',
//             data
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: 'something went wrong'
//         })
//     }
// }
module.exports = { registerController, loginController, forgotController, updateUserProfileController, getUserDetails, };
