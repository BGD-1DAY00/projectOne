/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/ValidateID.js":
/*!**********************************!*\
  !*** ./src/public/ValidateID.js ***!
  \**********************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function validateID(val) {
  var containObj = {
    containsLowercase: false,
    containsNumber: false,
    containsUpperCase: false
  };
  var validOrNot = contains(containObj, val);
  var ValidUserIDCheck = validator(validOrNot);
  return ValidUserIDCheck; // Ask about returns in ternery operators
  // containsLowercase ? console.log("lower") : console.log("fail");
  // containsUpperCase ? console.log("upper") : console.log("fail");
  // containsNumber ? console.log("number") : console.log("fail");
}

function validator(obj) {
  var containsLowercase = obj.containsLowercase,
      containsNumber = obj.containsNumber,
      containsUpperCase = obj.containsUpperCase;

  if (containsLowercase) {
    if (containsUpperCase) {
      if (containsNumber) {
        return "Valid UserID";
      } else {
        return "Please A Number To Your UserID";
      }
    } else {
      return "Please Add An Uppercase to Your String";
    }
  } else {
    return "Please Add An Lowercase to Your String";
  }
}

function contains(obj, val) {
  if (val.length >= 8 && val.length <= 12) {
    var updateObjValue = updateObj(obj, val);
    return updateObjValue;
  } else {
    return "ID is not long enough";
  }
}

function testContains() {
  var testSuccessObj = {
    containsNumber: false,
    containsLowercase: false,
    containsUpperCase: false
  };
  var testFailValue = "sfjd33";
  var failExpected = "ID is not long enough";
  var failResult = contains(testSuccessObj, testFailValue);
  var successResult = contains(testSuccessObj, "ksfjlSF343");

  var sucessResultType = _typeof(successResult);

  if (sucessResultType === "object" && failResult === failExpected) {
    console.log("testContains: Success; expected: ".concat(sucessResultType, " === object and expected: ").concat(failResult, " === ").concat(failExpected));
  } else {
    console.log("testContains: FAIL ".concat(sucessResultType));
  }
}

testContains();

function updateObj(obj, val) {
  for (var i = 0; i < val.length; i++) {
    if (val.charCodeAt(i) >= 65 && val.charCodeAt(i) <= 90) {
      obj.containsUpperCase = true;
    }

    if (val.charCodeAt(i) >= 97 && val.charCodeAt(i) <= 122) {
      obj.containsLowercase = true;
    }

    if (hasNumber(val)) {
      obj.containsNumber = true;
    }
  }

  return obj;
}

function testUpdateObj() {
  var testObj = {
    containsNumber: false,
    containsLowercase: false,
    containsUpperCase: false
  };
  var value = "asfd123@Ssdf";
  var expectedObj = {
    containsNumber: true,
    containsLowercase: true,
    containsUpperCase: true
  };
  var result = updateObj(testObj, value);

  if (result.containsNumber === expectedObj.containsNumber && result.containsLowercase === expectedObj.containsLowercase && result.containsUpperCase === expectedObj.containsUpperCase) {
    console.log("testUpdateObj: Success; Expected: ".concat((testObj.containsNumber, testObj.containsLowercase, testObj.containsUpperCase), " and  Result ").concat((result.containsNumber, result.containsLowercase, result.containsUpperCase)));
  } else {
    console.log("testUpdateObj: Failure; Expected: ".concat((testObj.containsNumber, testObj.containsLowercase, testObj.containsUpperCase), " and  Result ").concat((result.containsNumber, result.containsLowercase, result.containsUpperCase)));
  }
}

function hasNumber(str) {
  return /\d/.test(str);
}

function testHasNumber() {
  var expected = true;
  var string = "anackl#@#=3";
  var result = hasNumber(string);
  result === expected ? console.log("hasNumber function: success; ".concat(expected, " === ").concat(result)) : console.log("hasNumber function: FAILED");
}

testHasNumber();
testUpdateObj();
module.exports = {
  validateID: validateID
};

/***/ }),

/***/ "./src/public/other.js":
/*!*****************************!*\
  !*** ./src/public/other.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var style = __webpack_require__(/*! ./other.css */ "./src/public/other.css");

var body = document.querySelector("body");

function pading() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (bool) {
    var pad = function pad() {
      loop(index, letter, true);
    };

    var letter = "x";
    var index;
    return pad();
  } else {
    return -1;
  }
}

pading(true);

function loop(index, _char, bool) {
  if (bool) {
    for (index = 0; index < 21; index++) {
      body.innerHTML += "".concat(_char.padStart(index, _char), " <br>");
    }
  }
}

function testLoop() {
  //should not return anything, expecet undeined
  var index;
  var chat = "x";
  var result = loop(index, chat);

  if (result === undefined) {
    console.log("testLOOP; Success: ".concat(result, " === ").concat(undefined));
  } else {
    console.log("testLoop: fail; ".concat(result, " !== ").concat(undefined));
  }
}

function testPading() {
  var result = pading();

  if (result === -1) {
    console.log("testPading: Success");
  } else {
    console.log("testPading: Fail ".concat(result));
  }
}

testLoop();
testPading();

/***/ }),

/***/ "./src/public/validateBirthday.js":
/*!****************************************!*\
  !*** ./src/public/validateBirthday.js ***!
  \****************************************/
/***/ ((module) => {

function validateBirthday(val) {
  var diffDays = getDiffDays(val);
  var oldEnoughValue = oldEnough(diffDays);
  return oldEnoughValue;
}

function getDiffDays(val) {
  var date1 = new Date(val);
  var date2 = new Date(Date.now());
  var diffTime = date2 - date1;
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function testGetDiffDays() {
  var expected = 11;
  var value = "5/07/2022";
  var result = getDiffDays(value);

  if (result === expected) {
    console.log("SUCCSS; testValidateBirthday: ".concat(expected, " === ").concat(result));
  } else {
    console.log("FAIL; testValidateBirthday: ".concat(expected, " === ").concat(result));
  }
}

function oldEnough(diffDays) {
  if (diffDays > 6570) {
    return diffDays;
  } else {
    return "You are too Young, Go Outside!";
  }
}

function testOldEnough() {
  var expected = "You are too Young, Go Outside!";
  var value = 6569;
  var result = oldEnough(value);

  if (result === expected) {
    console.log("SUCCSS;testOldEnough expected: ".concat(expected, " === result: ").concat(result));
  } else {
    console.log("FAIL;testOldEnough expected: ".concat(expected, " === result: ").concat(result));
  }
}

testOldEnough();
testGetDiffDays();
module.exports = {
  validateBirthday: validateBirthday
};

/***/ }),

/***/ "./src/public/validateNames.js":
/*!*************************************!*\
  !*** ./src/public/validateNames.js ***!
  \*************************************/
/***/ ((module) => {

function validateNames(obj) {
  var firstName = obj.firstName,
      lastName = obj.lastName;

  if (firstName) {
    if (lastName) {
      return "Last Name and First Name Completed";
    } else {
      return "Last Name Emptey";
    }
  } else {
    return "FirstName Emptey";
  } // firstName
  //   ? lastName
  //     ? console.log("Last Name and First Name Completed")
  //     : console.log("Last Name Emptey")
  //   : console.log("FirstName Emptey");

}

function testvalidateNames() {
  var failObjFirstName = {
    firstName: "",
    lastName: "lastName"
  };
  var failObjLastName = {
    firstName: "firstName",
    lastName: ""
  };
  var succObj = {
    firstName: "firstName",
    lastName: "lastName"
  };
  var failObjFirstNameExpected = "FirstName Emptey";
  var failObjLastNameExpected = "Last Name Emptey";
  var succObjExpected = "Last Name and First Name Completed";
  var failObjFirstNameResult = validateNames(failObjFirstName);
  var failObjLastNameResult = validateNames(failObjLastName);
  var succObjResult = validateNames(succObj);

  if (failObjFirstNameResult == failObjFirstNameExpected && failObjLastNameResult == failObjLastNameExpected && succObjExpected == succObjResult) {
    console.log("SUCCESS: testvalidateNames: Expected Values: ".concat([failObjFirstNameExpected, failObjLastNameExpected, succObjExpected], " === Result ").concat([failObjFirstNameResult, failObjLastNameResult, succObjExpected]));
  } else {
    console.log("fail");
  }
}

testvalidateNames();
module.exports = {
  validateNames: validateNames
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pexels-christina-morillo-1181355.jpg */ "./src/public/img/pexels-christina-morillo-1181355.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pexels-dan-cristian-pădureț-1476321.jpg */ "./src/public/img/pexels-dan-cristian-pădureț-1476321.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pexels-andrea-piacquadio-840996.jpg */ "./src/public/img/pexels-andrea-piacquadio-840996.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n}\n#dash {\n  position: fixed;\n  display: none;\n  background-color: lightyellow;\n  top: 0;\n  padding-top: 1.5rem;\n  left: 70%;\n  width: 100vw;\n  height: 50vh;\n  font-size: 0.6rem;\n}\n#dash div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n#dash h1 {\n  margin-left: 1rem;\n  margin-top: 0.6rem;\n}\n\n#dash div button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 1rem;\n  background: none;\n  margin-left: 4rem;\n  border-radius: 2rem;\n}\n#signUp {\n  /* visibility: none; */\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n  justify-content: space-evenly;\n  align-items: center;\n  visibility: none;\n}\n#signUp form {\n  display: flex;\n  flex-direction: column;\n}\n#signUp form label {\n  margin-bottom: 1rem;\n}\n#signUp div button {\n  margin-bottom: 5rem;\n  padding: 1rem 1rem;\n}\nmain {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 45vh;\n  background-size: cover;\n}\n\n/* Navigation Styling */\nnav {\n  display: flex;\n  justify-content: space-between;\n  height: 10vh;\n}\nnav div:nth-child(1) {\n  display: flex;\n}\nnav div:nth-child(1) div {\n  display: flex;\n  flex-direction: column;\n}\nnav div:nth-child(1) #title {\n  margin-top: 1.3rem;\n  margin-left: 0.5rem;\n}\n\nnav div:nth-child(2) {\n  display: flex;\n  margin-right: 2rem;\n  align-items: center;\n}\nnav div:nth-child(2) i {\n  margin-left: 1rem;\n}\nnav img {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 5rem;\n  margin-top: 0.7rem;\n}\n\n/* Section; Title of the page Styling */\nmain section {\n  margin-top: 6rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: cornsilk;\n}\nmain section h2 {\n  font-size: 4.5vmax;\n  font-weight: bolder;\n}\nmain section h1 {\n  font-size: 5vmax;\n}\nmain section p {\n  margin-top: 1rem;\n  font-weight: 900;\n  color: cornsilk;\n}\nmain section #btn {\n  padding: 1rem 1rem;\n  margin-top: 1rem;\n  border-radius: 1rem;\n  background: none;\n  font-size: 2vmax;\n  color: cornsilk;\n  border-color: white;\n  font-weight: bolder;\n}\nmain section a {\n  text-decoration: none;\n  padding: 0.5rem 2rem;\n  color: rosybrown;\n  font-weight: bold;\n  border-bottom: 3px solid cornsilk;\n  border-width: 5px;\n  font-size: 3vmax;\n  cursor: pointer;\n}\n\n/* Section One */\n#section-one {\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-attachment: fixed;\n  background-size: contain;\n}\n#section-one #section-one-main {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: lightcyan;\n}\n#section-one #section-one-main h1 {\n  border-bottom: 1px solid black;\n}\n#section-one #section-one-main p {\n  font-size: 1.1rem;\n  padding-left: 2rem;\n  padding-right: 3rem;\n  margin-top: 2rem;\n}\n#section-one div:nth-child(1) {\n  height: 15vh;\n}\n\n/* project tabs */\n\n/* Tab 1 */\n#section-one div:nth-of-type(2) div:nth-of-type(1) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(1) i {\n  margin-left: 2.2rem;\n  background-color: red;\n  padding: 0.5rem;\n  border-radius: 0.5em;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(1) h1 {\n  background-color: aquamarine;\n  border-radius: 15px;\n  padding: 2rem 3rem;\n}\n\n/* Tab 2 */\n#section-one div:nth-of-type(2) div:nth-of-type(2) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 15vh;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(2) i {\n  margin-left: 1rem;\n  background-color: blue;\n  padding: 0.5rem;\n  border-radius: 0.5em;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(2) h1 {\n  background-color: aquamarine;\n  border-radius: 15px;\n  padding: 1.5rem 2.3rem;\n}\n\n/* Tab 3 */\n#section-one div:nth-of-type(2) div:nth-of-type(3) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 15vh;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(3) i {\n  margin-left: 9rem;\n  background-color: red;\n  padding: 0.5rem;\n  border-radius: 0.5em;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(3) h1 {\n  background-color: aquamarine;\n  border-radius: 15px;\n  padding: 1.5rem 2rem;\n}\n\n/* Tab 4 */\n\n#section-one div:nth-of-type(2) div:nth-of-type(4) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 15vh;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(4) i {\n  margin-left: 7rem;\n  background-color: blue;\n  padding: 0.5rem;\n  border-radius: 0.5em;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(4) h1 {\n  background-color: aquamarine;\n  border-radius: 15px;\n  padding: 1.5rem 2rem;\n}\n\n#footer {\n  height: 100vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-attachment: fixed;\n}\n#footer div {\n  width: 50vh;\n  margin-left: 45%;\n}\n#footer div h1 {\n  font-size: 5vmax;\n  padding-top: 1rem;\n}\n#footer p {\n  font-size: 1.3rem;\n}\n#footer p:first-of-type {\n  margin-top: 5rem;\n}\n#footer p:nth-of-type(2) {\n  margin-top: 3rem;\n}\n#footer div button {\n  margin-top: 2rem;\n  background: none;\n  border: none;\n  background-color: lemonchiffon;\n  padding: 1rem 1rem;\n  border-radius: 1rem;\n}\n#footer div button i {\n  margin-left: 0.5rem;\n}\n\n/* FORM */\n\n#show {\n  position: fixed;\n  top: 70%;\n  left: 0;\n  width: 100%;\n  overflow: visible !important;\n}\n", "",{"version":3,"sources":["webpack://./src/public/main.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,MAAM;EACN,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,yDAAmE;EACnE,YAAY;EACZ,sBAAsB;AACxB;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA,uCAAuC;AACvC;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,iCAAiC;EACjC,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,yDAAwE;EACxE,4BAA4B;EAC5B,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,YAAY;AACd;;AAEA,iBAAiB;;AAEjB,UAAU;AACV;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA,UAAU;AACV;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA,UAAU;AACV;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,yDAAkE;EAClE,sBAAsB;EACtB,4BAA4B;AAC9B;AACA;EACE,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA,SAAS;;AAET;EACE,eAAe;EACf,QAAQ;EACR,OAAO;EACP,WAAW;EACX,4BAA4B;AAC9B","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n}\n#dash {\n  position: fixed;\n  display: none;\n  background-color: lightyellow;\n  top: 0;\n  padding-top: 1.5rem;\n  left: 70%;\n  width: 100vw;\n  height: 50vh;\n  font-size: 0.6rem;\n}\n#dash div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n#dash h1 {\n  margin-left: 1rem;\n  margin-top: 0.6rem;\n}\n\n#dash div button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 1rem;\n  background: none;\n  margin-left: 4rem;\n  border-radius: 2rem;\n}\n#signUp {\n  /* visibility: none; */\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n  justify-content: space-evenly;\n  align-items: center;\n  visibility: none;\n}\n#signUp form {\n  display: flex;\n  flex-direction: column;\n}\n#signUp form label {\n  margin-bottom: 1rem;\n}\n#signUp div button {\n  margin-bottom: 5rem;\n  padding: 1rem 1rem;\n}\nmain {\n  background-image: url(\"./img/pexels-christina-morillo-1181355.jpg\");\n  height: 45vh;\n  background-size: cover;\n}\n\n/* Navigation Styling */\nnav {\n  display: flex;\n  justify-content: space-between;\n  height: 10vh;\n}\nnav div:nth-child(1) {\n  display: flex;\n}\nnav div:nth-child(1) div {\n  display: flex;\n  flex-direction: column;\n}\nnav div:nth-child(1) #title {\n  margin-top: 1.3rem;\n  margin-left: 0.5rem;\n}\n\nnav div:nth-child(2) {\n  display: flex;\n  margin-right: 2rem;\n  align-items: center;\n}\nnav div:nth-child(2) i {\n  margin-left: 1rem;\n}\nnav img {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 5rem;\n  margin-top: 0.7rem;\n}\n\n/* Section; Title of the page Styling */\nmain section {\n  margin-top: 6rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: cornsilk;\n}\nmain section h2 {\n  font-size: 4.5vmax;\n  font-weight: bolder;\n}\nmain section h1 {\n  font-size: 5vmax;\n}\nmain section p {\n  margin-top: 1rem;\n  font-weight: 900;\n  color: cornsilk;\n}\nmain section #btn {\n  padding: 1rem 1rem;\n  margin-top: 1rem;\n  border-radius: 1rem;\n  background: none;\n  font-size: 2vmax;\n  color: cornsilk;\n  border-color: white;\n  font-weight: bolder;\n}\nmain section a {\n  text-decoration: none;\n  padding: 0.5rem 2rem;\n  color: rosybrown;\n  font-weight: bold;\n  border-bottom: 3px solid cornsilk;\n  border-width: 5px;\n  font-size: 3vmax;\n  cursor: pointer;\n}\n\n/* Section One */\n#section-one {\n  width: 100vw;\n  background-image: url(\"./img/pexels-dan-cristian-pădureț-1476321.jpg\");\n  background-attachment: fixed;\n  background-size: contain;\n}\n#section-one #section-one-main {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: lightcyan;\n}\n#section-one #section-one-main h1 {\n  border-bottom: 1px solid black;\n}\n#section-one #section-one-main p {\n  font-size: 1.1rem;\n  padding-left: 2rem;\n  padding-right: 3rem;\n  margin-top: 2rem;\n}\n#section-one div:nth-child(1) {\n  height: 15vh;\n}\n\n/* project tabs */\n\n/* Tab 1 */\n#section-one div:nth-of-type(2) div:nth-of-type(1) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(1) i {\n  margin-left: 2.2rem;\n  background-color: red;\n  padding: 0.5rem;\n  border-radius: 0.5em;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(1) h1 {\n  background-color: aquamarine;\n  border-radius: 15px;\n  padding: 2rem 3rem;\n}\n\n/* Tab 2 */\n#section-one div:nth-of-type(2) div:nth-of-type(2) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 15vh;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(2) i {\n  margin-left: 1rem;\n  background-color: blue;\n  padding: 0.5rem;\n  border-radius: 0.5em;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(2) h1 {\n  background-color: aquamarine;\n  border-radius: 15px;\n  padding: 1.5rem 2.3rem;\n}\n\n/* Tab 3 */\n#section-one div:nth-of-type(2) div:nth-of-type(3) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 15vh;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(3) i {\n  margin-left: 9rem;\n  background-color: red;\n  padding: 0.5rem;\n  border-radius: 0.5em;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(3) h1 {\n  background-color: aquamarine;\n  border-radius: 15px;\n  padding: 1.5rem 2rem;\n}\n\n/* Tab 4 */\n\n#section-one div:nth-of-type(2) div:nth-of-type(4) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 15vh;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(4) i {\n  margin-left: 7rem;\n  background-color: blue;\n  padding: 0.5rem;\n  border-radius: 0.5em;\n}\n#section-one div:nth-of-type(2) div:nth-of-type(4) h1 {\n  background-color: aquamarine;\n  border-radius: 15px;\n  padding: 1.5rem 2rem;\n}\n\n#footer {\n  height: 100vh;\n  background-image: url(\"./img/pexels-andrea-piacquadio-840996.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n}\n#footer div {\n  width: 50vh;\n  margin-left: 45%;\n}\n#footer div h1 {\n  font-size: 5vmax;\n  padding-top: 1rem;\n}\n#footer p {\n  font-size: 1.3rem;\n}\n#footer p:first-of-type {\n  margin-top: 5rem;\n}\n#footer p:nth-of-type(2) {\n  margin-top: 3rem;\n}\n#footer div button {\n  margin-top: 2rem;\n  background: none;\n  border: none;\n  background-color: lemonchiffon;\n  padding: 1rem 1rem;\n  border-radius: 1rem;\n}\n#footer div button i {\n  margin-left: 0.5rem;\n}\n\n/* FORM */\n\n#show {\n  position: fixed;\n  top: 70%;\n  left: 0;\n  width: 100%;\n  overflow: visible !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/other.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/other.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    background-color: whitesmoke;\n}", "",{"version":3,"sources":["webpack://./src/public/other.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;AAChC","sourcesContent":["body{\n    background-color: whitesmoke;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/public/main.css":
/*!*****************************!*\
  !*** ./src/public/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/public/other.css":
/*!******************************!*\
  !*** ./src/public/other.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_other_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./other.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/other.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_other_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_other_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_other_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_other_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/public/img/pexels-andrea-piacquadio-840996.jpg":
/*!************************************************************!*\
  !*** ./src/public/img/pexels-andrea-piacquadio-840996.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "pexels-andrea-piacquadio-840996.jpg";

/***/ }),

/***/ "./src/public/img/pexels-christina-morillo-1181355.jpg":
/*!*************************************************************!*\
  !*** ./src/public/img/pexels-christina-morillo-1181355.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "pexels-christina-morillo-1181355.jpg";

/***/ }),

/***/ "./src/public/img/pexels-cottonbro-4543139.jpg":
/*!*****************************************************!*\
  !*** ./src/public/img/pexels-cottonbro-4543139.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "pexels-cottonbro-4543139.jpg";

/***/ }),

/***/ "./src/public/img/pexels-dan-cristian-pădureț-1476321.jpg":
/*!******************************************************************!*\
  !*** ./src/public/img/pexels-dan-cristian-pădureț-1476321.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "pexels-dan-cristian-pădureț-1476321.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/public/app.js ***!
  \***************************/
// Importing Files
var _require = __webpack_require__(/*! ./ValidateID */ "./src/public/ValidateID.js"),
    validateID = _require.validateID;

var _require2 = __webpack_require__(/*! ./validateBirthday */ "./src/public/validateBirthday.js"),
    validateBirthday = _require2.validateBirthday;

var _require3 = __webpack_require__(/*! ./validateNames */ "./src/public/validateNames.js"),
    validateNames = _require3.validateNames;

var other = __webpack_require__(/*! ./other.js */ "./src/public/other.js");

var style = __webpack_require__(/*! ./main.css */ "./src/public/main.css"); // Document


var img = document.getElementById("img");
var nav = document.getElementById("nav");
var btn = document.getElementById("btn");
var section = document.querySelector(".section");
var main = document.getElementById("main");
var signup = document.getElementById("signUp");
var formBtn = document.getElementById("form-btn");
var body = document.querySelector("body");
var form = document.querySelector("form");
var formSubmitBtn = document.getElementById("form-submit-btn");
var hamburger = document.querySelector("nav div i");
var press = document.getElementById("press");
var dash = document.getElementById("dash");
var dashButton = document.getElementById("dashButton");
var showData = document.getElementById("show"); // Placing Image

var imglog = __webpack_require__(/*! ./img/pexels-cottonbro-4543139.jpg */ "./src/public/img/pexels-cottonbro-4543139.jpg");

img.src = "".concat(imglog); // Event Listeners

hamburger.addEventListener("click", function () {
  press.style.display = "none";
  dash.style.display = "flex";
});
dashButton.addEventListener("click", function () {
  press.style.display = "flex";
  dash.style.display = "none";
}); //form exit button

formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  signup.style.display = "none";
  body.style.overflowY = "scroll";
}); //Register button

btn.addEventListener("click", function () {
  signup.style.display = "flex";
  signup.style.zIndex = 2;
  signup.style.background = "gray";
  body.style.overflowY = "hidden";
}); //form submit button

formSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var a = validateID(form.userID.value);
  var b = validateBirthday(form.birthday.value);
  var c = validateNames({
    firstName: form.fname.value,
    lastName: form.lname.value
  });
  console.log(a, b, c);
  var temp = "\n        <h1>".concat(form.fname.value, " ").concat(form.lname.value, "</h1>\n        <h3>Your Birthday is on ").concat(form.birthday.value, "</h3>\n        <br>\n        <h4>").concat(a, "</h4>\n        <h4>").concat(b, "</h4>\n        <h4>").concat(c, "</h4>\n    ");
  showData.innerHTML += temp;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFB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LG9EQUVzQmdFLElBQUksQ0FBQ21CLFFBQUwsQ0FBY25GLEtBRnBDLDhDQUlFZ0YsQ0FKRixnQ0FLRUUsQ0FMRixnQ0FNRUUsQ0FORixnQkFBVjtFQVFBZCxRQUFRLENBQUNoRCxTQUFULElBQXNCaUUsSUFBdEI7QUFDRCxDQWxCRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9zcmMvcHVibGljL1ZhbGlkYXRlSUQuanMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9zcmMvcHVibGljL290aGVyLmpzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vc3JjL3B1YmxpYy92YWxpZGF0ZUJpcnRoZGF5LmpzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vc3JjL3B1YmxpYy92YWxpZGF0ZU5hbWVzLmpzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vc3JjL3B1YmxpYy9tYWluLmNzcyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC8uL3NyYy9wdWJsaWMvb3RoZXIuY3NzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC8uL3NyYy9wdWJsaWMvbWFpbi5jc3M/YjQ4YyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC8uL3NyYy9wdWJsaWMvb3RoZXIuY3NzP2IyNWYiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vc3JjL3B1YmxpYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdmFsaWRhdGVJRCh2YWwpIHtcbiAgbGV0IGNvbnRhaW5PYmogPSB7XG4gICAgY29udGFpbnNMb3dlcmNhc2U6IGZhbHNlLFxuICAgIGNvbnRhaW5zTnVtYmVyOiBmYWxzZSxcbiAgICBjb250YWluc1VwcGVyQ2FzZTogZmFsc2UsXG4gIH07XG5cbiAgY29uc3QgdmFsaWRPck5vdCA9IGNvbnRhaW5zKGNvbnRhaW5PYmosIHZhbCk7XG4gIGNvbnN0IFZhbGlkVXNlcklEQ2hlY2sgPSB2YWxpZGF0b3IodmFsaWRPck5vdCk7XG4gIHJldHVybiBWYWxpZFVzZXJJRENoZWNrO1xuICAvLyBBc2sgYWJvdXQgcmV0dXJucyBpbiB0ZXJuZXJ5IG9wZXJhdG9yc1xuICAvLyBjb250YWluc0xvd2VyY2FzZSA/IGNvbnNvbGUubG9nKFwibG93ZXJcIikgOiBjb25zb2xlLmxvZyhcImZhaWxcIik7XG4gIC8vIGNvbnRhaW5zVXBwZXJDYXNlID8gY29uc29sZS5sb2coXCJ1cHBlclwiKSA6IGNvbnNvbGUubG9nKFwiZmFpbFwiKTtcbiAgLy8gY29udGFpbnNOdW1iZXIgPyBjb25zb2xlLmxvZyhcIm51bWJlclwiKSA6IGNvbnNvbGUubG9nKFwiZmFpbFwiKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdG9yKG9iaikge1xuICBjb25zdCB7IGNvbnRhaW5zTG93ZXJjYXNlLCBjb250YWluc051bWJlciwgY29udGFpbnNVcHBlckNhc2UgfSA9IG9iajtcbiAgaWYgKGNvbnRhaW5zTG93ZXJjYXNlKSB7XG4gICAgaWYgKGNvbnRhaW5zVXBwZXJDYXNlKSB7XG4gICAgICBpZiAoY29udGFpbnNOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIFwiVmFsaWQgVXNlcklEXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJQbGVhc2UgQSBOdW1iZXIgVG8gWW91ciBVc2VySURcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiUGxlYXNlIEFkZCBBbiBVcHBlcmNhc2UgdG8gWW91ciBTdHJpbmdcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiUGxlYXNlIEFkZCBBbiBMb3dlcmNhc2UgdG8gWW91ciBTdHJpbmdcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb250YWlucyhvYmosIHZhbCkge1xuICBpZiAodmFsLmxlbmd0aCA+PSA4ICYmIHZhbC5sZW5ndGggPD0gMTIpIHtcbiAgICBjb25zdCB1cGRhdGVPYmpWYWx1ZSA9IHVwZGF0ZU9iaihvYmosIHZhbCk7XG4gICAgcmV0dXJuIHVwZGF0ZU9ialZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIklEIGlzIG5vdCBsb25nIGVub3VnaFwiO1xuICB9XG59XG5mdW5jdGlvbiB0ZXN0Q29udGFpbnMoKSB7XG4gIGxldCB0ZXN0U3VjY2Vzc09iaiA9IHtcbiAgICBjb250YWluc051bWJlcjogZmFsc2UsXG4gICAgY29udGFpbnNMb3dlcmNhc2U6IGZhbHNlLFxuICAgIGNvbnRhaW5zVXBwZXJDYXNlOiBmYWxzZSxcbiAgfTtcbiAgY29uc3QgdGVzdEZhaWxWYWx1ZSA9IFwic2ZqZDMzXCI7XG4gIGNvbnN0IGZhaWxFeHBlY3RlZCA9IFwiSUQgaXMgbm90IGxvbmcgZW5vdWdoXCI7XG4gIGNvbnN0IGZhaWxSZXN1bHQgPSBjb250YWlucyh0ZXN0U3VjY2Vzc09iaiwgdGVzdEZhaWxWYWx1ZSk7XG5cbiAgY29uc3Qgc3VjY2Vzc1Jlc3VsdCA9IGNvbnRhaW5zKHRlc3RTdWNjZXNzT2JqLCBcImtzZmpsU0YzNDNcIik7XG4gIGNvbnN0IHN1Y2Vzc1Jlc3VsdFR5cGUgPSB0eXBlb2Ygc3VjY2Vzc1Jlc3VsdDtcblxuICBpZiAoc3VjZXNzUmVzdWx0VHlwZSA9PT0gXCJvYmplY3RcIiAmJiBmYWlsUmVzdWx0ID09PSBmYWlsRXhwZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGB0ZXN0Q29udGFpbnM6IFN1Y2Nlc3M7IGV4cGVjdGVkOiAke3N1Y2Vzc1Jlc3VsdFR5cGV9ID09PSBvYmplY3QgYW5kIGV4cGVjdGVkOiAke2ZhaWxSZXN1bHR9ID09PSAke2ZhaWxFeHBlY3RlZH1gXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgdGVzdENvbnRhaW5zOiBGQUlMICR7c3VjZXNzUmVzdWx0VHlwZX1gKTtcbiAgfVxufVxudGVzdENvbnRhaW5zKCk7XG5cbmZ1bmN0aW9uIHVwZGF0ZU9iaihvYmosIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh2YWwuY2hhckNvZGVBdChpKSA+PSA2NSAmJiB2YWwuY2hhckNvZGVBdChpKSA8PSA5MCkge1xuICAgICAgb2JqLmNvbnRhaW5zVXBwZXJDYXNlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbC5jaGFyQ29kZUF0KGkpID49IDk3ICYmIHZhbC5jaGFyQ29kZUF0KGkpIDw9IDEyMikge1xuICAgICAgb2JqLmNvbnRhaW5zTG93ZXJjYXNlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGhhc051bWJlcih2YWwpKSB7XG4gICAgICBvYmouY29udGFpbnNOdW1iZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiB0ZXN0VXBkYXRlT2JqKCkge1xuICBsZXQgdGVzdE9iaiA9IHtcbiAgICBjb250YWluc051bWJlcjogZmFsc2UsXG4gICAgY29udGFpbnNMb3dlcmNhc2U6IGZhbHNlLFxuICAgIGNvbnRhaW5zVXBwZXJDYXNlOiBmYWxzZSxcbiAgfTtcbiAgY29uc3QgdmFsdWUgPSBcImFzZmQxMjNAU3NkZlwiO1xuICBjb25zdCBleHBlY3RlZE9iaiA9IHtcbiAgICBjb250YWluc051bWJlcjogdHJ1ZSxcbiAgICBjb250YWluc0xvd2VyY2FzZTogdHJ1ZSxcbiAgICBjb250YWluc1VwcGVyQ2FzZTogdHJ1ZSxcbiAgfTtcbiAgY29uc3QgcmVzdWx0ID0gdXBkYXRlT2JqKHRlc3RPYmosIHZhbHVlKTtcbiAgaWYgKFxuICAgIHJlc3VsdC5jb250YWluc051bWJlciA9PT0gZXhwZWN0ZWRPYmouY29udGFpbnNOdW1iZXIgJiZcbiAgICByZXN1bHQuY29udGFpbnNMb3dlcmNhc2UgPT09IGV4cGVjdGVkT2JqLmNvbnRhaW5zTG93ZXJjYXNlICYmXG4gICAgcmVzdWx0LmNvbnRhaW5zVXBwZXJDYXNlID09PSBleHBlY3RlZE9iai5jb250YWluc1VwcGVyQ2FzZVxuICApIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGB0ZXN0VXBkYXRlT2JqOiBTdWNjZXNzOyBFeHBlY3RlZDogJHtcbiAgICAgICAgKHRlc3RPYmouY29udGFpbnNOdW1iZXIsXG4gICAgICAgIHRlc3RPYmouY29udGFpbnNMb3dlcmNhc2UsXG4gICAgICAgIHRlc3RPYmouY29udGFpbnNVcHBlckNhc2UpXG4gICAgICB9IGFuZCAgUmVzdWx0ICR7XG4gICAgICAgIChyZXN1bHQuY29udGFpbnNOdW1iZXIsXG4gICAgICAgIHJlc3VsdC5jb250YWluc0xvd2VyY2FzZSxcbiAgICAgICAgcmVzdWx0LmNvbnRhaW5zVXBwZXJDYXNlKVxuICAgICAgfWBcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYHRlc3RVcGRhdGVPYmo6IEZhaWx1cmU7IEV4cGVjdGVkOiAke1xuICAgICAgICAodGVzdE9iai5jb250YWluc051bWJlcixcbiAgICAgICAgdGVzdE9iai5jb250YWluc0xvd2VyY2FzZSxcbiAgICAgICAgdGVzdE9iai5jb250YWluc1VwcGVyQ2FzZSlcbiAgICAgIH0gYW5kICBSZXN1bHQgJHtcbiAgICAgICAgKHJlc3VsdC5jb250YWluc051bWJlcixcbiAgICAgICAgcmVzdWx0LmNvbnRhaW5zTG93ZXJjYXNlLFxuICAgICAgICByZXN1bHQuY29udGFpbnNVcHBlckNhc2UpXG4gICAgICB9YFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzTnVtYmVyKHN0cikge1xuICByZXR1cm4gL1xcZC8udGVzdChzdHIpO1xufVxuXG5mdW5jdGlvbiB0ZXN0SGFzTnVtYmVyKCkge1xuICBjb25zdCBleHBlY3RlZCA9IHRydWU7XG4gIGNvbnN0IHN0cmluZyA9IFwiYW5hY2tsI0AjPTNcIjtcbiAgY29uc3QgcmVzdWx0ID0gaGFzTnVtYmVyKHN0cmluZyk7XG5cbiAgcmVzdWx0ID09PSBleHBlY3RlZFxuICAgID8gY29uc29sZS5sb2coYGhhc051bWJlciBmdW5jdGlvbjogc3VjY2VzczsgJHtleHBlY3RlZH0gPT09ICR7cmVzdWx0fWApXG4gICAgOiBjb25zb2xlLmxvZyhcImhhc051bWJlciBmdW5jdGlvbjogRkFJTEVEXCIpO1xufVxudGVzdEhhc051bWJlcigpO1xudGVzdFVwZGF0ZU9iaigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdmFsaWRhdGVJRCB9O1xuIiwiY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi9vdGhlci5jc3NcIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmZ1bmN0aW9uIHBhZGluZyhib29sID0gZmFsc2UpIHtcbiAgaWYgKGJvb2wpIHtcbiAgICBsZXQgbGV0dGVyID0gXCJ4XCI7XG4gICAgbGV0IGluZGV4O1xuICAgIGZ1bmN0aW9uIHBhZCgpIHtcbiAgICAgIGxvb3AoaW5kZXgsIGxldHRlciwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYWQoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn1cbnBhZGluZyh0cnVlKTtcblxuZnVuY3Rpb24gbG9vcChpbmRleCwgY2hhciwgYm9vbCkge1xuICBpZihib29sKXtcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCAyMTsgaW5kZXgrKykge1xuICAgICAgYm9keS5pbm5lckhUTUwgKz0gYCR7Y2hhci5wYWRTdGFydChpbmRleCwgY2hhcil9IDxicj5gO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0TG9vcCgpIHtcbiAgLy9zaG91bGQgbm90IHJldHVybiBhbnl0aGluZywgZXhwZWNldCB1bmRlaW5lZFxuICBsZXQgaW5kZXg7XG4gIGxldCBjaGF0ID0gXCJ4XCI7XG4gIGxldCByZXN1bHQgPSBsb29wKGluZGV4LCBjaGF0KTtcbiAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5sb2coYHRlc3RMT09QOyBTdWNjZXNzOiAke3Jlc3VsdH0gPT09ICR7dW5kZWZpbmVkfWApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGB0ZXN0TG9vcDogZmFpbDsgJHtyZXN1bHR9ICE9PSAke3VuZGVmaW5lZH1gKTtcbiAgfVxufVxuZnVuY3Rpb24gdGVzdFBhZGluZygpIHtcbiAgY29uc3QgcmVzdWx0ID0gcGFkaW5nKCk7XG4gIGlmIChyZXN1bHQgPT09IC0xKSB7XG4gICAgY29uc29sZS5sb2coXCJ0ZXN0UGFkaW5nOiBTdWNjZXNzXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGB0ZXN0UGFkaW5nOiBGYWlsICR7cmVzdWx0fWApO1xuICB9XG59XG5cbnRlc3RMb29wKCk7XG50ZXN0UGFkaW5nKCk7XG4iLCJmdW5jdGlvbiB2YWxpZGF0ZUJpcnRoZGF5KHZhbCkge1xuICBjb25zdCBkaWZmRGF5cyA9IGdldERpZmZEYXlzKHZhbCk7XG4gIGNvbnN0IG9sZEVub3VnaFZhbHVlID0gb2xkRW5vdWdoKGRpZmZEYXlzKTtcbiAgcmV0dXJuIG9sZEVub3VnaFZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXREaWZmRGF5cyh2YWwpIHtcbiAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSh2YWwpO1xuICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xuICBjb25zdCBkaWZmVGltZSA9IGRhdGUyIC0gZGF0ZTE7XG4gIGNvbnN0IGRpZmZEYXlzID0gTWF0aC5jZWlsKGRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgcmV0dXJuIGRpZmZEYXlzO1xufVxuXG5mdW5jdGlvbiB0ZXN0R2V0RGlmZkRheXMoKSB7XG4gIGNvbnN0IGV4cGVjdGVkID0gMTE7XG4gIGNvbnN0IHZhbHVlID0gXCI1LzA3LzIwMjJcIjtcbiAgY29uc3QgcmVzdWx0ID0gZ2V0RGlmZkRheXModmFsdWUpO1xuXG4gIGlmIChyZXN1bHQgPT09IGV4cGVjdGVkKSB7XG4gICAgY29uc29sZS5sb2coYFNVQ0NTUzsgdGVzdFZhbGlkYXRlQmlydGhkYXk6ICR7ZXhwZWN0ZWR9ID09PSAke3Jlc3VsdH1gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgRkFJTDsgdGVzdFZhbGlkYXRlQmlydGhkYXk6ICR7ZXhwZWN0ZWR9ID09PSAke3Jlc3VsdH1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbGRFbm91Z2goZGlmZkRheXMpIHtcbiAgaWYgKGRpZmZEYXlzID4gNjU3MCkge1xuICAgIHJldHVybiBkaWZmRGF5cztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYFlvdSBhcmUgdG9vIFlvdW5nLCBHbyBPdXRzaWRlIWA7XG4gIH1cbn1cbmZ1bmN0aW9uIHRlc3RPbGRFbm91Z2goKSB7XG4gIGNvbnN0IGV4cGVjdGVkID0gYFlvdSBhcmUgdG9vIFlvdW5nLCBHbyBPdXRzaWRlIWA7XG4gIGNvbnN0IHZhbHVlID0gNjU2OTtcbiAgY29uc3QgcmVzdWx0ID0gb2xkRW5vdWdoKHZhbHVlKTtcblxuICBpZiAocmVzdWx0ID09PSBleHBlY3RlZCkge1xuICAgIGNvbnNvbGUubG9nKGBTVUNDU1M7dGVzdE9sZEVub3VnaCBleHBlY3RlZDogJHtleHBlY3RlZH0gPT09IHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYEZBSUw7dGVzdE9sZEVub3VnaCBleHBlY3RlZDogJHtleHBlY3RlZH0gPT09IHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gIH1cbn1cbnRlc3RPbGRFbm91Z2goKTtcbnRlc3RHZXREaWZmRGF5cygpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0geyB2YWxpZGF0ZUJpcnRoZGF5IH07XG4iLCJmdW5jdGlvbiB2YWxpZGF0ZU5hbWVzKG9iaikge1xuICBsZXQgeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH0gPSBvYmo7XG4gIGlmIChmaXJzdE5hbWUpIHtcbiAgICBpZiAobGFzdE5hbWUpIHtcbiAgICAgIHJldHVybiBcIkxhc3QgTmFtZSBhbmQgRmlyc3QgTmFtZSBDb21wbGV0ZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiTGFzdCBOYW1lIEVtcHRleVwiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJGaXJzdE5hbWUgRW1wdGV5XCI7XG4gIH1cbiAgLy8gZmlyc3ROYW1lXG4gIC8vICAgPyBsYXN0TmFtZVxuICAvLyAgICAgPyBjb25zb2xlLmxvZyhcIkxhc3QgTmFtZSBhbmQgRmlyc3QgTmFtZSBDb21wbGV0ZWRcIilcbiAgLy8gICAgIDogY29uc29sZS5sb2coXCJMYXN0IE5hbWUgRW1wdGV5XCIpXG4gIC8vICAgOiBjb25zb2xlLmxvZyhcIkZpcnN0TmFtZSBFbXB0ZXlcIik7XG59XG5cbmZ1bmN0aW9uIHRlc3R2YWxpZGF0ZU5hbWVzKCkge1xuICBsZXQgZmFpbE9iakZpcnN0TmFtZSA9IHtcbiAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgbGFzdE5hbWU6IFwibGFzdE5hbWVcIixcbiAgfTtcbiAgbGV0IGZhaWxPYmpMYXN0TmFtZSA9IHtcbiAgICBmaXJzdE5hbWU6IFwiZmlyc3ROYW1lXCIsXG4gICAgbGFzdE5hbWU6IFwiXCIsXG4gIH07XG4gIGxldCBzdWNjT2JqID0ge1xuICAgIGZpcnN0TmFtZTogXCJmaXJzdE5hbWVcIixcbiAgICBsYXN0TmFtZTogXCJsYXN0TmFtZVwiLFxuICB9O1xuICBjb25zdCBmYWlsT2JqRmlyc3ROYW1lRXhwZWN0ZWQgPSBcIkZpcnN0TmFtZSBFbXB0ZXlcIjtcbiAgY29uc3QgZmFpbE9iakxhc3ROYW1lRXhwZWN0ZWQgPSBcIkxhc3QgTmFtZSBFbXB0ZXlcIjtcbiAgY29uc3Qgc3VjY09iakV4cGVjdGVkID0gXCJMYXN0IE5hbWUgYW5kIEZpcnN0IE5hbWUgQ29tcGxldGVkXCI7XG5cbiAgY29uc3QgZmFpbE9iakZpcnN0TmFtZVJlc3VsdCA9IHZhbGlkYXRlTmFtZXMoZmFpbE9iakZpcnN0TmFtZSk7XG4gIGNvbnN0IGZhaWxPYmpMYXN0TmFtZVJlc3VsdCA9IHZhbGlkYXRlTmFtZXMoZmFpbE9iakxhc3ROYW1lKTtcbiAgY29uc3Qgc3VjY09ialJlc3VsdCA9IHZhbGlkYXRlTmFtZXMoc3VjY09iaik7XG5cbiAgaWYgKFxuICAgIGZhaWxPYmpGaXJzdE5hbWVSZXN1bHQgPT0gZmFpbE9iakZpcnN0TmFtZUV4cGVjdGVkICYmXG4gICAgZmFpbE9iakxhc3ROYW1lUmVzdWx0ID09IGZhaWxPYmpMYXN0TmFtZUV4cGVjdGVkICYmXG4gICAgc3VjY09iakV4cGVjdGVkID09IHN1Y2NPYmpSZXN1bHRcbiAgKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgU1VDQ0VTUzogdGVzdHZhbGlkYXRlTmFtZXM6IEV4cGVjdGVkIFZhbHVlczogJHtbXG4gICAgICAgIGZhaWxPYmpGaXJzdE5hbWVFeHBlY3RlZCxcbiAgICAgICAgZmFpbE9iakxhc3ROYW1lRXhwZWN0ZWQsXG4gICAgICAgIHN1Y2NPYmpFeHBlY3RlZCxcbiAgICAgIF19ID09PSBSZXN1bHQgJHtbXG4gICAgICAgIGZhaWxPYmpGaXJzdE5hbWVSZXN1bHQsXG4gICAgICAgIGZhaWxPYmpMYXN0TmFtZVJlc3VsdCxcbiAgICAgICAgc3VjY09iakV4cGVjdGVkLFxuICAgICAgXX1gXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImZhaWxcIik7XG4gIH1cbn1cbnRlc3R2YWxpZGF0ZU5hbWVzKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHsgdmFsaWRhdGVOYW1lcyB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL3BleGVscy1jaHJpc3RpbmEtbW9yaWxsby0xMTgxMzU1LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3BleGVscy1kYW4tY3Jpc3RpYW4tcGHMhmR1cmV0zKYtMTQ3NjMyMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wZXhlbHMtYW5kcmVhLXBpYWNxdWFkaW8tODQwOTk2LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4jZGFzaCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgbGVmdDogNzAlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcbiNkYXNoIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI2Rhc2ggaDEge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAwLjZyZW07XFxufVxcblxcbiNkYXNoIGRpdiBidXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcbiNzaWduVXAge1xcbiAgLyogdmlzaWJpbGl0eTogbm9uZTsgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdmlzaWJpbGl0eTogbm9uZTtcXG59XFxuI3NpZ25VcCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jc2lnblVwIGZvcm0gbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuI3NpZ25VcCBkaXYgYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxufVxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogNDV2aDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gU3R5bGluZyAqL1xcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5uYXYgZGl2Om50aC1jaGlsZCgxKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5uYXYgZGl2Om50aC1jaGlsZCgxKSBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbm5hdiBkaXY6bnRoLWNoaWxkKDEpICN0aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAxLjNyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG5uYXYgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubmF2IGRpdjpudGgtY2hpbGQoMikgaSB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxubmF2IGltZyB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjdyZW07XFxufVxcblxcbi8qIFNlY3Rpb247IFRpdGxlIG9mIHRoZSBwYWdlIFN0eWxpbmcgKi9cXG5tYWluIHNlY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogNnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGNvcm5zaWxrO1xcbn1cXG5tYWluIHNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiA0LjV2bWF4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxubWFpbiBzZWN0aW9uIGgxIHtcXG4gIGZvbnQtc2l6ZTogNXZtYXg7XFxufVxcbm1haW4gc2VjdGlvbiBwIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6IGNvcm5zaWxrO1xcbn1cXG5tYWluIHNlY3Rpb24gI2J0biB7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDJ2bWF4O1xcbiAgY29sb3I6IGNvcm5zaWxrO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbm1haW4gc2VjdGlvbiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgY29sb3I6IHJvc3licm93bjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGNvcm5zaWxrO1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBmb250LXNpemU6IDN2bWF4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTZWN0aW9uIE9uZSAqL1xcbiNzZWN0aW9uLW9uZSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuI3NlY3Rpb24tb25lICNzZWN0aW9uLW9uZS1tYWluIHtcXG4gIGhlaWdodDogNDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbn1cXG4jc2VjdGlvbi1vbmUgI3NlY3Rpb24tb25lLW1haW4gaDEge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jc2VjdGlvbi1vbmUgI3NlY3Rpb24tb25lLW1haW4gcCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1jaGlsZCgxKSB7XFxuICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi8qIHByb2plY3QgdGFicyAqL1xcblxcbi8qIFRhYiAxICovXFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDEpIGkge1xcbiAgbWFyZ2luLWxlZnQ6IDIuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgxKSBoMSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG59XFxuXFxuLyogVGFiIDIgKi9cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMikgaSB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMikgaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAxLjVyZW0gMi4zcmVtO1xcbn1cXG5cXG4vKiBUYWIgMyAqL1xcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDMpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbn1cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgzKSBpIHtcXG4gIG1hcmdpbi1sZWZ0OiA5cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDMpIGgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XFxufVxcblxcbi8qIFRhYiA0ICovXFxuXFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoNCkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDE1dmg7XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDQpIGkge1xcbiAgbWFyZ2luLWxlZnQ6IDdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDQpIGgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XFxufVxcblxcbiNmb290ZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuI2Zvb3RlciBkaXYge1xcbiAgd2lkdGg6IDUwdmg7XFxuICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cXG4jZm9vdGVyIGRpdiBoMSB7XFxuICBmb250LXNpemU6IDV2bWF4O1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcbiNmb290ZXIgcCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuI2Zvb3RlciBwOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuI2Zvb3RlciBwOm50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxufVxcbiNmb290ZXIgZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxlbW9uY2hpZmZvbjtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbiNmb290ZXIgZGl2IGJ1dHRvbiBpIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi8qIEZPUk0gKi9cXG5cXG4jc2hvdyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDcwJTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wdWJsaWMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5REFBbUU7RUFDbkUsWUFBWTtFQUNaLHNCQUFz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Q1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLE9BQU87RUFDUCxXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuI2Rhc2gge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGxlZnQ6IDcwJTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG4jZGFzaCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNkYXNoIGgxIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcbn1cXG5cXG4jZGFzaCBkaXYgYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG4jc2lnblVwIHtcXG4gIC8qIHZpc2liaWxpdHk6IG5vbmU7ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IG5vbmU7XFxufVxcbiNzaWduVXAgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3NpZ25VcCBmb3JtIGxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbiNzaWduVXAgZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbn1cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWcvcGV4ZWxzLWNocmlzdGluYS1tb3JpbGxvLTExODEzNTUuanBnXFxcIik7XFxuICBoZWlnaHQ6IDQ1dmg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4vKiBOYXZpZ2F0aW9uIFN0eWxpbmcgKi9cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTB2aDtcXG59XFxubmF2IGRpdjpudGgtY2hpbGQoMSkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxubmF2IGRpdjpudGgtY2hpbGQoMSkgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5uYXYgZGl2Om50aC1jaGlsZCgxKSAjdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMS4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxubmF2IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm5hdiBkaXY6bnRoLWNoaWxkKDIpIGkge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbm5hdiBpbWcge1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xcbn1cXG5cXG4vKiBTZWN0aW9uOyBUaXRsZSBvZiB0aGUgcGFnZSBTdHlsaW5nICovXFxubWFpbiBzZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDZyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBjb3Juc2lsaztcXG59XFxubWFpbiBzZWN0aW9uIGgyIHtcXG4gIGZvbnQtc2l6ZTogNC41dm1heDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbm1haW4gc2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDV2bWF4O1xcbn1cXG5tYWluIHNlY3Rpb24gcCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiBjb3Juc2lsaztcXG59XFxubWFpbiBzZWN0aW9uICNidG4ge1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAydm1heDtcXG4gIGNvbG9yOiBjb3Juc2lsaztcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5tYWluIHNlY3Rpb24gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIGNvbG9yOiByb3N5YnJvd247XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBjb3Juc2lsaztcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgZm9udC1zaXplOiAzdm1heDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU2VjdGlvbiBPbmUgKi9cXG4jc2VjdGlvbi1vbmUge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZy9wZXhlbHMtZGFuLWNyaXN0aWFuLXBhzIZkdXJldMymLTE0NzYzMjEuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG4jc2VjdGlvbi1vbmUgI3NlY3Rpb24tb25lLW1haW4ge1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxufVxcbiNzZWN0aW9uLW9uZSAjc2VjdGlvbi1vbmUtbWFpbiBoMSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNzZWN0aW9uLW9uZSAjc2VjdGlvbi1vbmUtbWFpbiBwIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuXFxuLyogcHJvamVjdCB0YWJzICovXFxuXFxuLyogVGFiIDEgKi9cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgxKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMSkgaSB7XFxuICBtYXJnaW4tbGVmdDogMi4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDEpIGgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcbn1cXG5cXG4vKiBUYWIgMiAqL1xcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbn1cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgyKSBpIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgyKSBoMSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDEuNXJlbSAyLjNyZW07XFxufVxcblxcbi8qIFRhYiAzICovXFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMykge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDE1dmg7XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDMpIGkge1xcbiAgbWFyZ2luLWxlZnQ6IDlyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMykgaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG59XFxuXFxuLyogVGFiIDQgKi9cXG5cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSg0KSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoNCkgaSB7XFxuICBtYXJnaW4tbGVmdDogN3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoNCkgaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZy9wZXhlbHMtYW5kcmVhLXBpYWNxdWFkaW8tODQwOTk2LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcbiNmb290ZXIgZGl2IHtcXG4gIHdpZHRoOiA1MHZoO1xcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcXG59XFxuI2Zvb3RlciBkaXYgaDEge1xcbiAgZm9udC1zaXplOiA1dm1heDtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG4jZm9vdGVyIHAge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbiNmb290ZXIgcDpmaXJzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcbiNmb290ZXIgcDpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG4jZm9vdGVyIGRpdiBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsZW1vbmNoaWZmb247XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG4jZm9vdGVyIGRpdiBidXR0b24gaSB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4vKiBGT1JNICovXFxuXFxuI3Nob3cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA3MCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHVibGljL290aGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL290aGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb3RoZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBJbXBvcnRpbmcgRmlsZXNcbmNvbnN0IHsgdmFsaWRhdGVJRCB9ID0gcmVxdWlyZShcIi4vVmFsaWRhdGVJRFwiKTtcbmNvbnN0IHsgdmFsaWRhdGVCaXJ0aGRheSB9ID0gcmVxdWlyZShcIi4vdmFsaWRhdGVCaXJ0aGRheVwiKTtcbmNvbnN0IHsgdmFsaWRhdGVOYW1lcyB9ID0gcmVxdWlyZShcIi4vdmFsaWRhdGVOYW1lc1wiKTtcblxuY29uc3Qgb3RoZXIgPSByZXF1aXJlKCcuL290aGVyLmpzJylcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4vbWFpbi5jc3NcIik7XG4vLyBEb2N1bWVudFxuY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdcIik7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuXCIpO1xubGV0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25cIik7XG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuY29uc3Qgc2lnbnVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBcIik7XG5jb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWJ0blwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IGZvcm1TdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tc3VibWl0LWJ0blwiKTtcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgZGl2IGlcIik7XG5jb25zdCBwcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3NcIik7XG5jb25zdCBkYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoXCIpO1xuY29uc3QgZGFzaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFzaEJ1dHRvblwiKTtcbmNvbnN0IHNob3dEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93XCIpO1xuXG4vLyBQbGFjaW5nIEltYWdlXG5jb25zdCBpbWdsb2cgPSByZXF1aXJlKFwiLi9pbWcvcGV4ZWxzLWNvdHRvbmJyby00NTQzMTM5LmpwZ1wiKTtcbmltZy5zcmMgPSBgJHtpbWdsb2d9YDtcblxuLy8gRXZlbnQgTGlzdGVuZXJzXG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRhc2guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5kYXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByZXNzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgZGFzaC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuLy9mb3JtIGV4aXQgYnV0dG9uXG5mb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNpZ251cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbn0pO1xuXG4vL1JlZ2lzdGVyIGJ1dHRvblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNpZ251cC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIHNpZ251cC5zdHlsZS56SW5kZXggPSAyO1xuICBzaWdudXAuc3R5bGUuYmFja2dyb3VuZCA9IFwiZ3JheVwiO1xuICBib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG59KTtcblxuLy9mb3JtIHN1Ym1pdCBidXR0b25cbmZvcm1TdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgYSA9IHZhbGlkYXRlSUQoZm9ybS51c2VySUQudmFsdWUpO1xuICBjb25zdCBiID0gdmFsaWRhdGVCaXJ0aGRheShmb3JtLmJpcnRoZGF5LnZhbHVlKTtcbiAgY29uc3QgYyA9IHZhbGlkYXRlTmFtZXMoe1xuICAgIGZpcnN0TmFtZTogZm9ybS5mbmFtZS52YWx1ZSxcbiAgICBsYXN0TmFtZTogZm9ybS5sbmFtZS52YWx1ZSxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGEsIGIsIGMpO1xuICBjb25zdCB0ZW1wID0gYFxuICAgICAgICA8aDE+JHtmb3JtLmZuYW1lLnZhbHVlfSAke2Zvcm0ubG5hbWUudmFsdWV9PC9oMT5cbiAgICAgICAgPGgzPllvdXIgQmlydGhkYXkgaXMgb24gJHtmb3JtLmJpcnRoZGF5LnZhbHVlfTwvaDM+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGg0PiR7YX08L2g0PlxuICAgICAgICA8aDQ+JHtifTwvaDQ+XG4gICAgICAgIDxoND4ke2N9PC9oND5cbiAgICBgO1xuICBzaG93RGF0YS5pbm5lckhUTUwgKz0gdGVtcDtcbn0pO1xuIl0sIm5hbWVzIjpbInZhbGlkYXRlSUQiLCJ2YWwiLCJjb250YWluT2JqIiwiY29udGFpbnNMb3dlcmNhc2UiLCJjb250YWluc051bWJlciIsImNvbnRhaW5zVXBwZXJDYXNlIiwidmFsaWRPck5vdCIsImNvbnRhaW5zIiwiVmFsaWRVc2VySURDaGVjayIsInZhbGlkYXRvciIsIm9iaiIsImxlbmd0aCIsInVwZGF0ZU9ialZhbHVlIiwidXBkYXRlT2JqIiwidGVzdENvbnRhaW5zIiwidGVzdFN1Y2Nlc3NPYmoiLCJ0ZXN0RmFpbFZhbHVlIiwiZmFpbEV4cGVjdGVkIiwiZmFpbFJlc3VsdCIsInN1Y2Nlc3NSZXN1bHQiLCJzdWNlc3NSZXN1bHRUeXBlIiwiY29uc29sZSIsImxvZyIsImkiLCJjaGFyQ29kZUF0IiwiaGFzTnVtYmVyIiwidGVzdFVwZGF0ZU9iaiIsInRlc3RPYmoiLCJ2YWx1ZSIsImV4cGVjdGVkT2JqIiwicmVzdWx0Iiwic3RyIiwidGVzdCIsInRlc3RIYXNOdW1iZXIiLCJleHBlY3RlZCIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHlsZSIsInJlcXVpcmUiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFkaW5nIiwiYm9vbCIsInBhZCIsImxvb3AiLCJpbmRleCIsImxldHRlciIsImNoYXIiLCJpbm5lckhUTUwiLCJwYWRTdGFydCIsInRlc3RMb29wIiwiY2hhdCIsInVuZGVmaW5lZCIsInRlc3RQYWRpbmciLCJ2YWxpZGF0ZUJpcnRoZGF5IiwiZGlmZkRheXMiLCJnZXREaWZmRGF5cyIsIm9sZEVub3VnaFZhbHVlIiwib2xkRW5vdWdoIiwiZGF0ZTEiLCJEYXRlIiwiZGF0ZTIiLCJub3ciLCJkaWZmVGltZSIsIk1hdGgiLCJjZWlsIiwidGVzdEdldERpZmZEYXlzIiwidGVzdE9sZEVub3VnaCIsInZhbGlkYXRlTmFtZXMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRlc3R2YWxpZGF0ZU5hbWVzIiwiZmFpbE9iakZpcnN0TmFtZSIsImZhaWxPYmpMYXN0TmFtZSIsInN1Y2NPYmoiLCJmYWlsT2JqRmlyc3ROYW1lRXhwZWN0ZWQiLCJmYWlsT2JqTGFzdE5hbWVFeHBlY3RlZCIsInN1Y2NPYmpFeHBlY3RlZCIsImZhaWxPYmpGaXJzdE5hbWVSZXN1bHQiLCJmYWlsT2JqTGFzdE5hbWVSZXN1bHQiLCJzdWNjT2JqUmVzdWx0Iiwib3RoZXIiLCJpbWciLCJnZXRFbGVtZW50QnlJZCIsIm5hdiIsImJ0biIsInNlY3Rpb24iLCJtYWluIiwic2lnbnVwIiwiZm9ybUJ0biIsImZvcm0iLCJmb3JtU3VibWl0QnRuIiwiaGFtYnVyZ2VyIiwicHJlc3MiLCJkYXNoIiwiZGFzaEJ1dHRvbiIsInNob3dEYXRhIiwiaW1nbG9nIiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXkiLCJlIiwicHJldmVudERlZmF1bHQiLCJvdmVyZmxvd1kiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwiYSIsInVzZXJJRCIsImIiLCJiaXJ0aGRheSIsImMiLCJmbmFtZSIsImxuYW1lIiwidGVtcCJdLCJzb3VyY2VSb290IjoiIn0=