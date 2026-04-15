const uploadToCloudinary = require("../helpers/cloudinaryHelper");
const Image = require("../schema/imageSchema");

// function that controls the uploading of images to cloudinary
const uploadImage = async (req, res) => {
    try { 
        const user = req.user
        // checks if file is missing in req object
        if (!req.file) {
            return res.status(404).json({
                success: false,
                message: 'file not found, please upload file'
            })
        }

        //upload to cloudinary
        const { url, publicId} = await uploadToCloudinary(req.file.path)
        // store the image url and public id along with the uploaded user id
        const newlyUploadedImage = new Image({
            url,
            publicId,
            uploadedBy: user._id
        })
        await newlyUploadedImage.save()

        res.status(201).json({
            success: true,
            message: 'image upload successful.'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'error during upload.'
        })
    }
}

// function gets all images uploaded

module.exports = {
    uploadImage
}