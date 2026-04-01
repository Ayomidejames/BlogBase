const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    // commenter's Id
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // post's Id
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    comment: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500 
    },
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment