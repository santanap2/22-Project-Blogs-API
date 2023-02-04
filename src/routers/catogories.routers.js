const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const { validateToken } = require('../middlewares/user.middlewares');

const categoriesRouter = express.Router();

categoriesRouter.post('/categories', validateToken, categoriesController.createCategory);
categoriesRouter.get('/categories', validateToken, categoriesController.allCategories);

module.exports = categoriesRouter;