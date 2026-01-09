const Post = require('../models/post');

// Create a new post
const createPost = async (req, res) => {
    content = req.body;
    try {
        const response = await Post.create(content);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createPost
};