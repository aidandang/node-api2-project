const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router
  .route('/')
  .get(postController.readPosts);

router
  .route('/:id')
  .get(postController.readPostById);

module.exports = router;