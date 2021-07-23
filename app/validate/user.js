'use strict';
const index = {
  username: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    required: true,
    min: 6,
  },
  qrcode: {
    type: 'string',
    required: true,
  },
};

const create = {
  username: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    required: true,
    min: 6,
  },
};

module.exports = {
  index,
  create,
};
