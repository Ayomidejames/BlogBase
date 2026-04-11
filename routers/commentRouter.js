const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { postComment, deleteComment, getCommentsByPost } = require('../controllers/commentController')


// const authMiddleware = require('../middlewares/authmiddleware')
const commentRouter = express.Router()

commentRouter
    // creates a new 
    .post('/comment', authMiddleware, postComment)

    // gets all comments
    .get('/:postId/comments', getCommentsByPost)

    // delete comment
    .delete('/delcomment', authMiddleware, deleteComment)


module.exports = commentRouter