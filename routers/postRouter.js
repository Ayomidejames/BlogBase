const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createPost, getPost, onePost, updatePost, deletePost } = require('../controllers/postController')

// const authMiddleware = require('../middlewares/authmiddleware')
const postRouter = express.Router()

postRouter
    // creates a new 
    .post('/product/', authMiddleware, createPost)

    // gets all products
    .get('/products', getPost)

    // gets one product
    .get('/product/:id', onePost)

    // update product
    .put('/product/:id', authMiddleware, updatePost)

    // delete product
    .delete('/product/:id', authMiddleware ,deletePost)

module.exports = postRouter