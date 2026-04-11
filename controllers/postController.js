const authMiddleware = require("../middlewares/authMiddleware")
const Post = require("../schema/postSchema")

// create new post
const createPost = async (req, res) => {
    try {
        const user = req.user
        const { title, description , content } = req.body
        if (!user) {
            return res.status(403).json({msg: 'Login to post.'})
        }
        if ( !title || !description || !content ) {
        return res.status(400).json({msg: "All fields are required."})
        }
        const newPost = new Post({...req.body, userId: user._id})
        await newPost.save()
        res.status(201).json(newPost)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    } 
}

const getPost = async (req, res) => {
  try {
    const posts = await Post.find().populate('userId', '-password');
    if (!posts) return res.status(404).json({msg: 'No posts available.'}) 
    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const onePost = async (req, res) => {
  try {
    const {id} = req.params
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: `Post with id ${id} not found` });
    return res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const user = req.user
    const { title, content, description } = req.body
    const {id} = req.params    
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    if ((user._id).toString() === (post.userId).toString()) {
        const updated_post = await Post.findByIdAndUpdate(id, {title, content, description}, {new: true})
        return res.status(200).json(updated_post)
    } else {
        return res.status(403).json({msg: "You can only update your post."})
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
    const user = req.user
    try {
        const {id} = req.params
        // const product = await Product.findByIdAndDelete(id)
        const post = await Post.findById(id)
        
        if (!post) {
            res.status(400).json({
                message: `Post with id ${id} not found.`
            })
        }

        if (user._id.toString() !== post.userId.toString()) {
            return res.status(403).json({msg: `You can only delete your post. ${user._id}, ${post.userId}`})
        }
        await post.deleteOne()
        return res.status(200).json({msg: "Post deleted successfully."})
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = {
    createPost,
    getPost,
    onePost,
    updatePost,
    deletePost
}