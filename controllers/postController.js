const db = require('../data/db');

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
      .status(404)
      .json({
        status: 'fail',
        message: err
      })
  }
}