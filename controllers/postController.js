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

exports.createPost = async (req, res) => {
  try {
    const post = {...req.body};
    if ((!post.title) || (!post.contents)) {
      res.status(400).json({ 
        message: 'Please provide title and contents for the post.'
      })
    } else {
      const newPost = await db.insert(post);
      res.status(201).json({
        status: 'success',
        post: newPost
      })
    }
  }
  catch(err) {
    res
      .status(500)
      .json({
        status: 'fail',
        message: 'There was an error while saving the post to the database.'
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