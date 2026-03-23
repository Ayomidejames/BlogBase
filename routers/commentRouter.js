const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { postComment, getAllComments, deleteComment } = require('../controllers/commentController')


// const authMiddleware = require('../middlewares/authmiddleware')
const commentRouter = express.Router()

commentRouter
    // creates a new 
    .post('/postcomment', authMiddleware, postComment)

    // gets all products
    .get('/comments', getAllComments)

    .delete('/deleteComment', deleteComment)


module.exports = commentRouter