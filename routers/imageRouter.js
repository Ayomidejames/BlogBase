const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { uploadImage } = require('../controllers/imageController')
const uploadMidddleware = require('../middlewares/uploadMidddleware')



const imageRouter = express.Router()
imageRouter
    // endpoint to upload image
    .post('/upload/image', authMiddleware, uploadMidddleware.single('image'), uploadImage)

    // endpoint to get image


module.exports = imageRouter