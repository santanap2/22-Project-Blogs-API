const { Category } = require('../models');

const allCategories = async () => {
  const result = await Category.findAll();
  return result;
};

const createCategory = async (category) => {
  if (!category) return { type: 'MISSING_NAME', message: '"name" is required' };

  const categories = await Category.findAll({ attributes: ['id'] });
  const { id } = categories[categories.length - 1];
    
  const result = await Category.create({
    id: Number(id) + 1,
    name: category,
  });

  return { type: null, message: result };
};

module.exports = {
  allCategories,
  createCategory,
};
