const Post = require("../modules/post");

exports.createPost = async (req, res) => {
  console.log(req.file);
  const { title, meta, content, slug, author, tags } = req.body;
  const newPost = new Post({ title, meta, content, slug, author, tags });

  await newPost.save();
  res.json(newPost);
};
