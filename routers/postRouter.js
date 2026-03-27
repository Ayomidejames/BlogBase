const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createPost, getPost, onePost, updatePost, deletePost } = require('../controllers/postController')

// const authMiddleware = require('../middlewares/authmiddleware')
const postRouter = express.Router()

postRouter
    // creates a new 
    .post('/post/', authMiddleware, createPost)

    // gets all products
    .get('/getPost', getPost)

    // gets one product
    .get('/post/:id', onePost)

    // update product
    .put('/post/:id', authMiddleware, updatePost)

    // delete product
    .delete('/post/:id', authMiddleware ,deletePost)

module.exports = postRouter