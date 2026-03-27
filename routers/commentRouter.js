const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { postComment, deleteComment, getCommentsByPost } = require('../controllers/commentController')


// const authMiddleware = require('../middlewares/authmiddleware')
const commentRouter = express.Router()

commentRouter
    // creates a new 
    .post('/postcomment', authMiddleware, postComment)

    // gets all comments
    .get('/comments', getCommentsByPost)

    // delete comment
    .delete('/deleteComment', authMiddleware, deleteComment)


module.exports = commentRouter