const mongoose = require('mongoose')

const imgSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true});

const Image = mongoose.model('Image', imgSchema)

module.exports = Image