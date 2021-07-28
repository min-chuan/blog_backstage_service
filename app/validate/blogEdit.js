'use strict';

const release = {
  title: {
    type: 'string',
    required: true,
  },
  content: {
    type: 'string',
    required: true,
  },
  abstract: {
    type: 'string',
    required: true,
  },
  tagIdList: {
    type: 'array',
    required: true,
  },
};

module.exports = {
  release,
};
