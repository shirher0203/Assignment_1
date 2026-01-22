const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');


// create comment
router.post('/', commentController.addComment);

// update comment message only
router.put('/:id', commentController.updateComment);

module.exports = router;
