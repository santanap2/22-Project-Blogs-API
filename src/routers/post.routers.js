const express = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../middlewares/user.middlewares');

const postRouter = express.Router();

// postRouter.post('/post', validateToken, postController.createPost);
postRouter.get('/post', validateToken, postController.getPosts);
// postRouter.get('/post/:id', validateToken, postController.getPostById);

module.exports = postRouter;