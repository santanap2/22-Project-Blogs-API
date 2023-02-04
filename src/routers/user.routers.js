const express = require('express');
const userController = require('../controllers/user.controller');
const { validateToken } = require('../middlewares/user.middlewares');

const userRouter = express.Router();

userRouter.post('/user', userController.createUser);
userRouter.get('/user', validateToken, userController.getUsers);
userRouter.get('/user/:id', validateToken, userController.getUserById);

module.exports = userRouter;