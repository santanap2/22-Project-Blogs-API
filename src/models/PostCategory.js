const PostCategory = (Sequelize, DataTypes) => {
  const postCategory = Sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false,
    tableName: 'postCategory',
    underscored: true,
  })

  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      as: 'categories',
      through: postCategory,
      otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      as: 'blogPost',
      through: postCategory,
      otherKey: 'postId',
    });
  };

  return postCategory;
};

module.exports = PostCategory;