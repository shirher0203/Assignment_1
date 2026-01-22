
const Comment = require('../models/Comment');
const Post = require('../models/פost');


// Create a new comment
const addComment = async (req, res) => {
	const content = req.body;
	try {
		// Check if postId exists
		const post = await Post.findById(content.postId);
		if (!post) {
			return res.status(404).json({ message: 'Post not found for this comment' });
		}
		const response = await Comment.create(content);
		res.status(201).json(response);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { addComment };
