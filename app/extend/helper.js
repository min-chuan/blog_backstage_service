'use strict';
const Encrypto = require('../util/encrypto');
const ImageCaptcha = require('../util/imageCaptcha');

module.exports = {
  encryptText(text) {
    return Encrypto.encryptText(this, text);
  },
  ...ImageCaptcha,
};
