const BlogPost = (Sequelize, DataTypes) => {
  const blogPosts = Sequelize.define('BlogPost', {
    id: {
      allowNull: null,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      foreignKey: true,
      type: DataTypes.INTEGER
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, 
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  })

  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })
  }

  return blogPosts;
};

module.exports = BlogPost;
