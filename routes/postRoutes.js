const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router
  .route('/')
  .get(postController.readPosts)

module.exports = router;