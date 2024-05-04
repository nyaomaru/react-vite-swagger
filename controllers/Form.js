'use strict';

var utils = require('../utils/writer.js');
var Form = require('../service/FormService');

module.exports.formPOST = function formPOST (req, res, next, body) {
  Form.formPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
