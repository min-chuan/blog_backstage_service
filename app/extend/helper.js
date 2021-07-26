'use strict';
const Encrypto = require('../util/encrypto');

module.exports = {
  encryptText(text) {
    return Encrypto.encryptText(this, text);
  },
};
