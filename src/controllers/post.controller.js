const postService = require('../services/post.service');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const { type, message } = await postService.createPost({
    title, content, categoryIds, authorization,
  });
  
  if (type) return res.status(400).json({ message });

  return res.status(201).json(message);
};

const getPosts = async (_req, res) => {
  const result = await postService.getPosts();
  return res.status(200).json(result);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await postService.getPostById(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};
