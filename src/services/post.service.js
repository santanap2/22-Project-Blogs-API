const { BlogPost, User, Category, PostCategory } = require('../models');
const { authToken } = require('../jwt/jsonWebToken');

const createPost = async ({ title, content, categoryIds, authorization }) => {
  if (!title || !content || !categoryIds) {
    return { type: 'MISSING_FIELD', message: 'Some required fields are missing' };
  }

  const categoryExists = await Category.findAll({ where: { id: categoryIds } });
  if (categoryExists.length < categoryIds.length) {
    return { type: 'CATEGORY_ERROR', message: 'one or more "categoryIds" not found' };
  }

  const { id: userId } = authToken(authorization);
  
  const newBlogPost = await BlogPost.create({
    title, content, userId, published: Date.now(), updated: Date.now(),
  });

  await categoryIds.forEach((item) => {
    PostCategory.create({ postId: newBlogPost.id, categoryId: item });
  });
     
    return { type: null, message: newBlogPost };
};

const getPosts = async () => {
  const result = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: PostCategory },
    ],
  });
  return result;
};

const getPostById = async (id) => {
  const result = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  if (!result) return { type: 'NOT_FOUND', message: 'Post does not exist' };

  return { type: null, message: result };
};

// const updatePost = async ({ title, content, id, authorization }) => {
//   if (!title || !content) {
//     return { type: 'MISSING_FIELD', message: 'Some required fields are missing' };
//   }

//   // const { id: tokenId } = authToken(authorization);
//   // const { id: postId } = await getPostById(id);
//   // if (postId !== tokenId) return { type: 'NO_ACCESS', message: 'Unauthorized user' };

//   const [result] = await BlogPost.update(
//     { title, content },
//     { where: { id } },
//     );

//   return { type: null, message: result };
// };

module.exports = {
  createPost,
  getPosts,
  getPostById,
  // updatePost,
};
