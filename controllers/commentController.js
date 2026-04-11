const Comment = require("../schema/commentSchema")
const Post = require("../schema/postSchema")

// create new post
const postComment = async (req, res) => {
    try {
        const { postId, comment } = req.body
        const user = req.user
        if ( !postId || !comment) {
        return res.status(400).json({msg: "All fields are required."})}
        const newComment = new Comment({
            authorId: user._id,
            postId,
            comment
        })
        const savedComment = await newComment.save()
        await Post.findByIdAndUpdate(
            postId, 
            { $push: { commentId: savedComment._id } }, // Adds the new ID to the array
            { new: true }
        );
        return res.status(201).json(savedComment)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    } 
}

const getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    // checks if postId is valid
    const post = await Post.findById(postId)
    if (!post) {
        return res.status(404).json({msg: `Post with Id ${postId} not found`})
    }

    const comments = await Comment.find({ postId })
    .populate('authorId', 'username')
    .populate('postId', 'title content')
    .sort({ createdAt: -1 })
    res.status(200).json(comments);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteComment = async (req, res) => {
    const user = req.user
    try {
        const {id} = req.params
    
        const comment = await Comment.findById(id)
        if (!comment) {
            res.status(400).json({
                message: `Comment with id ${id} not found.`
            })
        }
        if (user._id.toString() !== comment.authorId.toString()) {
            return res.json({msg: "You can only delete your comment."})
        }
        // removes the comment ID from the Post's comments array
        await Post.findByIdAndUpdate(comment.postId, {
            $pull: { commentId: id }
        })
        await comment.deleteOne()
        return res.status(200).json({msg: "Comment deleted successfully."})
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = {
    postComment,
    getCommentsByPost,
    deleteComment
}