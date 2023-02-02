const User = (Sequelize, DataTypes) => {
  const user = Sequelize.define(
    'User', 
    {
      id: {
        allowNull: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      foreignKey: 'id',
      as: 'blogPosts'
    })
  }

  return user;
};

module.exports = User;