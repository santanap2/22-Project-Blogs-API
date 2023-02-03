const BlogPost = (Sequelize, DataTypes) => {
  const blogPosts = Sequelize.define('BlogPost', {
    id: {
      allowNull: null,
      primaryKey: true,
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
    tableName: 'blogPost',
    underscored: true,
  })

  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users'
    })
  }

  return blogPosts;
};

module.exports = BlogPost;
