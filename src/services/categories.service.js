const { Category } = require('../models');

const createCategory = async (category) => {
  if (!category) return { type: 'MISSING_NAME', message: '"name" is required' };

  const allCategories = await Category.findAll({ attributes: ['id'] });
  const { id } = allCategories[allCategories.length - 1];
    
  const result = await Category.create({
    id: Number(id) + 1,
    name: category,
  });
  
  return { type: null, message: result };
};

module.exports = {
  createCategory,
};
