const postService = require('../services/post.service');

// const createPost = async (req, res) => {
//   const { type, message } = await postService.createPost(req.body);
  
//   if (type) return res.status(400).json({ message });
// };

const getPosts = async (_req, res) => {
  const result = await postService.getPosts();
  return res.status(200).json(result);
};

// const getPostById = async (req, res) => {
//   const { id } = req.params;
//   const result = await postService.getPostById(id);

//   return res.status(200).json(result);
// };

module.exports = {
  // createPost,
  getPosts,
  // getPostById,
};
