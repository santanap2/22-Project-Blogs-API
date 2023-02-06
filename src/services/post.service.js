const { BlogPost, User, Category, PostsCategory } = require('../models');

// const createPost = async ({ title, content, categoryIds }) => {
//   if (!title || !content || !categoryIds) {
//     return { type: 'MISSING_FIELD', message: 'Some required fields are missing' };
//   }

//   return { message: 'FALTA IMPLEMENTAR' };
// };

const getPosts = async () => {
  const result = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: PostsCategory },
    ],
  });
  return result;
};

module.exports = {
  // createPost,
  getPosts,
};
