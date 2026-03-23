const express = require('express')
const server = express()
require('dotenv').config()
const cookieParser = require('cookie-parser')
const { otpRouter } = require('./routers/otpRouter')
const db = require('./mongoDB/db')
const authRouter = require('./routers/authRouter')
const userRouter = require('./routers/userRouter')
const postRouter = require('./routers/postRouter')
const commentRouter = require('./routers/commentRouter')
db()

const port = process.env.port

// middlewares that helps us able to send urlencoded and json data to the request body 
server.use(express.json())
server.use(express.urlencoded({
    extended: true
}))
server.use(cookieParser())
server.use('/api', otpRouter)
server.use('/api', authRouter)
server.use('/api', userRouter)
server.use('/api', postRouter)
server.use('/api', commentRouter)
server.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})