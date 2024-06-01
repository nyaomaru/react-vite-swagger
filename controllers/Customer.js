'use strict';

var utils = require('../utils/writer.js');
var Customer = require('../service/CustomerService');

module.exports.customerDetailIdDELETE = function customerDetailIdDELETE (req, res, next, id) {
  Customer.customerDetailIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customerDetailIdGET = function customerDetailIdGET (req, res, next, id) {
  Customer.customerDetailIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customerEditIdPUT = function customerEditIdPUT (req, res, next, body, id) {
  Customer.customerEditIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customerGET = function customerGET (req, res, next) {
  Customer.customerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
