const ArtistModel = require("../models/ArtistModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const artworkModel = require('../models/artworkModel')
const fs = require('fs')
const braintree = require('braintree')
const userOrderModal = require('../models/userOrderModels')
const dotenv = require('dotenv')
// below we are creating the payment gateway
dotenv.config()
// console.log(process.env.BRAINTREE_PUBLIC_KEY)
var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY
})
// below is the controller for register
const registerController = async (req, res) => {

    try {
        const { email, password } = req.fields;
        const { photo } = req.files
        const existingUser = await ArtistModel.findOne({ email });
        if (existingUser) {
            return res
                .status(200)
                .send({ success: false, message: "Artist already exist" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        req.fields.password = hashedpassword;
        const newArtist = new ArtistModel({ ...req.fields });
        if (photo) {
            newArtist.photo.data = fs.readFileSync(photo.path);
            newArtist.photo.ContentType = photo.type
        }
        await newArtist.save();
        return res
            .status(201)
            .send({ success: true, message: "registration successful", newArtist });
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
        const artist = await ArtistModel.findOne({ email: req.body.email })
        if (!artist) {
            return res.status(400).send({
                success: false,
                message: 'invalid email or password'
            })
        }

        const ismatch = await bcrypt.compare(req.body.password, artist.password);
        if (!ismatch) {
            return res.status(400).send({
                success: false,
                message: 'invalid username or password'
            })
        }
        const token = jwt.sign({ id: artist._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        // console.log(token)
        res.status(200).send({ success: true, message: 'login successfull', token, artist })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error in the login',

        })
    }
};

// // forgot password controller
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

        const artist = await ArtistModel.findOne({ email, answer })

        if (!artist) {
            return res.status(500).send({
                success: false,
                message: 'user not found'
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(newpassword, salt);
        await ArtistModel.findByIdAndUpdate(artist._id, { password: hashed })

        return res.status(200).send({
            success: true,
            message: 'password changed successfully',
            artist
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
// // below is the controller for getting the user details

const getArtistDetails = async (req, res) => {
    try {
        const { artistId } = req.params;
        console.log(artistId)
        const artist = await ArtistModel.findById(artistId)
        console.log(artist)
        res.status(200).send({
            success: true,
            message: 'details fetched successfully',
            artist
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
// // below is the controller for updating the profile
const updateArtistProfileController = async (req, res) => {
    try {
        // destructuring the data
        const { name, password, phone, answer, address, achievement, description, event, exhibition } = req.body;
        const { artistId, instagram, facebook, twitter } = req.params;
        // console.log(artistId)
        const artist = await ArtistModel.findOne(artistId)
        // console.log(artist)
        const salt = await bcrypt.genSalt(10);
        // console.log(password)
        const hashedpassword = password ? await bcrypt.hash(password, salt) : undefined
        // console.log(artist)  
        const updatedArtist = await ArtistModel.findOneAndUpdate(artist?._id, {
            name: name || artist.name,
            password: hashedpassword || artist.password,
            phone: phone || artist.phone,
            answer: answer || artist.answer,
            address: address || artist.address,
            achievement: achievement || artist.achievement,
            description: description || artist.description,
            event: event || artist.event,
            exhibition: exhibition || artist.exhibition,
            instagram: instagram || artist.instagram,
            facebook: facebook || artist.facebook,
            twitter: twitter || artist.twitter

        }, { new: true })

        res.status(200).send({
            success: true,
            message: 'profile updated successfully',
            updatedArtist
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

// below is the controller for getting the artwork according the artist

const getArtistArtworkController = async (req, res) => {
    try {
        const { ArtistId } = req.params;
        const data = await artworkModel.find({ artist: ArtistId }).select('-photo')
        res.status(200).send({
            success: true,
            message: 'artist artwork fetched successfully',
            data

        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong getting the artist artwork',
            error
        })
    }
}

// get artist image controller
const getArtistPhoto = async (req, res) => {
    try {
        const post = await ArtistModel.findById(req.params.ArtistId).select("photo")
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

// below is the controller for adding the item into the cart
const addTocart = async (req, res) => {
    try {
        const { artistId, item } = req.body;
        const artist = await ArtistModel.findById(artistId)
        const cart = artist.cart
        cart.push(item)
        const updatedArtist = await artist.save()
        res.status(200).send({
            success: true,
            message: 'item has been added to the cart',
            updatedArtist

        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something Went Wrong while adding to cart',
            error
        })
    }
}

// below is the controller for getting the artist and its cart items
const getCartItems = async (req, res) => {
    try {
        const { ArtistId } = req.params;
        // console.log('artist id is', ArtistId)
        // here above we are successfully getting the 
        const artistdetail = await ArtistModel.findById(ArtistId).select('-photo');
        // below will be fetching the artist cart
        const artistCart = artistdetail.cart
        // here above we have successfully fetched the cart
        res.status(201).send({
            success: true,
            message: 'artist fetched successfully',
            artistCart
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong while getting the cart items',
            error
        })
    }
}

// below id the controller for removing the item from the cart
const removeCartItem = async (req, res) => {
    try {
        const { ArtistId, artWorkId } = req.params
        const artistDetail = await ArtistModel.findById(ArtistId).select('-photo').populate('cart');
        // finding the item to be removed
        const itemIndex = artistDetail.cart.findIndex(item => item._id.toString() === artWorkId)
        // console.log(itemIndex)
        // this item index will contain the index of particular item if it is the first item deleted it will be 0 and if item not found then itemindex will be 0
        if (itemIndex === -1) {
            return res.status(404).send({
                success: false,
                message: 'Item not found in the cart'
            })
        }

        // below removing the artitem from the cart
        artistDetail.cart.splice(itemIndex, 1);

        // below we are saving the updated art
        const updatedArtist = await artistDetail.save()

        res.status(201).send({
            success: true,
            message: 'Item deleted successfully',
            updatedArtist
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something Went Wrong',
            error
        })
    }
}

// below is the controller for removing all cart item
const removeAllCartItem = async (req, res) => {
    try {
        // we are finding the artist first 
        const { ArtistId } = req.params
        const ArtistDetail = await ArtistModel.findById(ArtistId)
        ArtistDetail.cart = []
        // the same above code can be done by the splice method
        // ArtistDetail.cart.splice(0, ArtistDetail.cart.length)   
        const updatedArtist = await ArtistDetail.save()
        res.status(201).send({
            success: true,
            message: 'all items deleted from cart',
            updatedArtist

        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Something went wrong',
            error
        })
    }
}
// below is the controller for the payments and else stuff
// below is for the braintree token
const braintreeTokenController = async (req, res) => {
    try {
        // here we are generating the token
        gateway.clientToken.generate({}, function (err, response) {
            if (err) {
                res.status(500).send(err)
            }
            else {
                res.send(response)
            }
        })
    } catch (error) {
        console.log(error)
    }
}
// below is the cntroller for payment
const brainTreePatymentController = async (req, res) => {
    try {
        const { cart, nonce, ArtistId } = req.body;
        let total = 0
        cart?.map((item) => {
            total = total + item?.price
        })
        let newTransaction = gateway.transaction.sale({
            amount: total,
            paymentMethodNonce: "nonce",
            options: {
                submitForSettlement: true
            }
        }, function (err, result) {
            if (result) {
                const order = new userOrderModal({
                    artworks: cart,
                    payment: result,
                    buyer: ArtistId,
                    // buyer: req.user._id,
                }).save()
                res.json({ ok: true })
            }
            else {
                res.status(500).send(err)
            }
        })
        res.status(201).send({
            success: true,
            message: 'payment successfull',
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { registerController, loginController, forgotController, getArtistDetails, updateArtistProfileController, getArtistArtworkController, getArtistPhoto, addTocart, getCartItems, removeCartItem, brainTreePatymentController, braintreeTokenController, removeAllCartItem };
