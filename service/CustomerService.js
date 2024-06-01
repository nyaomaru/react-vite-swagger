"use strict";

/**
 * Delete customer detail information
 *
 * id Integer Numeric ID of the user to update
 * returns String
 **/
exports.customerDetailIdDELETE = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = "true";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Get a customer detail by ID
 *
 * id Integer Numeric ID of the user to get
 * returns customerDetail
 **/
exports.customerDetailIdGET = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      city: "forest 1",
      name: "nyaomaru",
      id: "id",
      favorite: "catnip",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Update customer detail information
 *
 * body Customer_form_body
 * id Integer Numeric ID of the user to update
 * returns String
 **/
exports.customerEditIdPUT = function (body, id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = "true";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Get Customer Info
 * Get your customer list
 *
 * returns customerList
 **/
exports.customerGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      customerList: [
        [
          {
            id: 1,
            name: "nyaomaru",
          },
          {
            id: 2,
            name: "cat",
          },
          {
            id: 3,
            name: "dog",
          },
        ],
      ],
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
