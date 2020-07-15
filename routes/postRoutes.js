const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router
  .route('/')
  .get(postController.readPosts)
  .post(postController.createPost);

router
  .route('/:id')
  .get(postController.readPostById)
  .delete(postController.deletePostById)
  .put(postController.updatePostById);

router
  .route('/:id/comments')
  .get(postController.readComments)

module.exports = router;