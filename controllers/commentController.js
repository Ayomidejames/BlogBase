const Comment = require("../schema/commentSchema")

// create new post
const postComment = async (req, res) => {
    try {
        const {authorId, postId, comment} = req.body
        if (!authorId || !postId || !comment) {
        return res.status(400).json({msg: "All fields are required."})}
        const newPost = new Blog({
            authorId: req.user._id,
            postId,
            comment
        })
        await newPost.save()
        res.status(201).json(newPost)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    } 
}

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('postId authorId');
    if (!comments) return res.status(404).json({msg: 'No comment available.'}) 
    return res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteComment = async (req, res) => {
    const user = req.user
    try {
        const {id} = req.params
        // const product = await Product.findByIdAndDelete(id)
        const comment = await Comment.findById(id)
        if (!comment) {
            res.status(400).json({
                message: `Comment with id ${id} not found.`
            })
        }
        if (user._id !== comment.authorId) {
            return res.json({msg: "You can only delete your comment."})
        }
        await comment.deleteOne
        return res.status(200).json({msg: "Comment deleted successfully."})
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = {
    postComment,
    getAllComments,
    deleteComment
}