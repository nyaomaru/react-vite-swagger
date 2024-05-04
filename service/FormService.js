'use strict';


/**
 * Post Form Info
 * Post form state info
 *
 * body Form_body 
 * returns String
 **/
exports.formPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "true";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

