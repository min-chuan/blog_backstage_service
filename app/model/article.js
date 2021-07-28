'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER, TEXT } = app.Sequelize;

  const Article = app.model.define('article', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    title: {
      unique: true,
      allowNull: false,
      type: STRING,
    },
    content: {
      allowNull: false,
      type: TEXT,
    },
    abstract: {
      allowNull: false,
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

  Article.associate = function() {
    app.model.Article.belongsToMany(app.model.ArticleTag, {
      through: app.model.ArticleTag,
    });
  };
  return Article;
};
