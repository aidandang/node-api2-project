const db = require('../data/db');

exports.readPosts = async (req, res) => {
  try {
    const posts = await db.find();
    res.status(200).json({
      status: 'success',
      posts
    })
  }
  catch(err) {
    res.status(500).json({
      error: 'The posts information could not be retrieved.'
    })
  }
}

exports.createPost = async (req, res) => {
  try {
    const post = {...req.body};
    if ((!post.title) || (!post.contents)) {
      res.status(400).json({ 
        error: 'Please provide title and contents for the post.'
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
    res.status(500).json({
      error: 'There was an error while saving the post to the database.'
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
        error: 'The post with the specified ID does not exist.'
      })
    }
  }
  catch(err) {
    res.status(500).json({
      error: 'The post information could not be retrieved.'
    })
  }
}

exports.deletePostById = async (req, res) => {
  try {
    const id = req.params.id;
    const postRemoved = await db.remove(id);

    if (postRemoved) {
      res.status(200).json({
        status: "success",
        post: postRemoved
      })
    } else {
      res.status(404).json({
        error: 'The post with the specified ID does not exist.'
      })
    } 
  }
  catch {
    res.status(500).json({ 
      error: "The post could not be removed."
    })
  }
}

exports.updatePostById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = {...req.body};
    if ((!post.title) || (!post.contents)) {
      res.status(400).json({ 
        error: 'Please provide title and contents for the post.'
      })
    } else {
      const postUpdated = await db.update(id, post);
      if (postUpdated) {
        res.status(200).json({
          status: "success",
          post: postUpdated
        })
      } else {
        res.status(404).json({
          error: 'The post with the specified ID does not exist.'
        })
      } 
    } 
  }
  catch {
    res.status(500).json({ 
      error: "The post could not be updated."
    })
  }
}

exports.readComments = async (req, res) => {
  try {
    const id = req.params.id;
    const comments = await db.findPostComments(id);

    if (comments.length > 0) {
      res.status(200).json({
        status: "success",
        comments
      })
    }
    else {
      res.status(404).json({
        error: 'No comments found.'
      })
    }
  }
  catch {
    res.status(500).json({
      error: 'The comments information could not be retrieved.'
    })
  }
}