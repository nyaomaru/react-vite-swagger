"use strict";

/**
 * Get Customer Info
 * Get your customer list
 *
 * returns inline_response_200
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
