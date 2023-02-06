const Category = (Sequelize, DataTypes) => {
  const category = Sequelize.define('Category', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  })

  return category;
};

module.exports = Category;