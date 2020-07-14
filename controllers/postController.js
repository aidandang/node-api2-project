const db = require('../data/db');
const e = require('express');

exports.readPosts = async (req, res) => {
  try {
    const posts = await db.find();
    res
      .status(200)
      .json({
        status: 'success',
        posts
      })
  }
  catch(err) {
    res
      .status(500)
      .json({
        status: 'fail',
        message: 'The posts information could not be retrieved.'
      })
  }
}

exports.readPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await db.findById(id);

    if (post.length > 0) {
      res.status(200).json({
        status: 'success',
        post
      });
    }
    else {
      res.status(404).json({
        status: 'fail',
        message: 'The post with the specified ID does not exist.'
      })
    }
  }
  catch(err) {
    res
      .status(500)
      .json({
        status: 'fail',
        message: 'The post information could not be retrieved.'
      })
  }
}