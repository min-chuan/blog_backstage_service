'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize;

  const Tag = app.model.define('tag', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      allowNull: false,
      unique: true,
      type: STRING,
    },
    createdAt: {
      type: DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DATE,
      allowNull: false,
    },
  });

  Tag.associate = function() {
    app.model.Tag.belongsToMany(app.model.ArticleTag, {
      through: app.model.ArticleTag,
    });
  };
  return Tag;
};
