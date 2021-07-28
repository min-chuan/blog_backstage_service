'use strict';
const Article = require('./article');
const Tag = require('./tag');
module.exports = app => {
  const { DATE, INTEGER } = app.Sequelize;

  const ArticleTag = app.model.define('articleTag', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    articleId: {
      allowNull: false,
      type: INTEGER,
      references: {
        model: Article,
        key: 'id',
      },
    },
    tagId: {
      allowNull: false,
      type: INTEGER,
      references: {
        model: Tag,
        key: 'id',
      },
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

  return ArticleTag;
};
