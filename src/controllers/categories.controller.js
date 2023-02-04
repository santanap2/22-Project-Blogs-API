const categoriesService = require('../services/categories.service');

const allCategories = async (_req, res) => {
  const result = await categoriesService.allCategories();
  return res.status(200).json(result);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await categoriesService.createCategory(name);

  if (type) return res.status(400).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  allCategories,
  createCategory,
};
