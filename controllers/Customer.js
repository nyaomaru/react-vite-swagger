"use strict";

var utils = require("../utils/writer.js");
var Customer = require("../service/CustomerService");

module.exports.customerEditIdPUT = function customerEditIdPUT(
  req,
  res,
  next,
  body,
  id
) {
  Customer.customerEditIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customerGET = function customerGET(req, res, next) {
  Customer.customerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customerIdGET = function customerIdGET(req, res, next, id) {
  Customer.customerIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
