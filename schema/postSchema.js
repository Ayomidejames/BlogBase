const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Post = new mongoose.model('Post', postSchema)

module.exports = Post