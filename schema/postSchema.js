const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    commentId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
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

const Post = mongoose.model('Post', postSchema)

module.exports = Post