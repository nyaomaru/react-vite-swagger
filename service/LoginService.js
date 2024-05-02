'use strict';


/**
 * Get Login Info
 * Check you are already login state
 *
 * returns String
 **/
exports.loginGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "false";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Post Login Info
 * Post login state info
 *
 * body Login_body 
 * returns String
 **/
exports.loginPOST = function(body) {
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

