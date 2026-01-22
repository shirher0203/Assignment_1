
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// get comment by id
router.get('/:id', commentController.getCommentById);

// create comment
router.post('/', commentController.addComment);

// update comment message only
router.put('/:id', commentController.updateComment);

// delete comment by id
router.delete('/:id', commentController.deleteComment);

module.exports = router;
