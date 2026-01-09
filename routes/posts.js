const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Sample route for creating a post
router.post('/', (req, res) => {
    postController.createPost(req, res);
});

module.exports = router;