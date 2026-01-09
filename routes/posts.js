const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// create post
router.post('/', (req, res) => {
    postController.createPost(req, res);
});

// get all posts
router.get('/', (req, res) => {
    postController.getPosts(req, res);
});

// get post by id
router.get('/:id', (req, res) => {
    postController.getPostById(req, res);
});

module.exports = router;