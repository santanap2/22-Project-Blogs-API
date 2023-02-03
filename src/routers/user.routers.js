const express = require('express');
const userController = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/user', userController.createUser);

module.exports = userRouter;