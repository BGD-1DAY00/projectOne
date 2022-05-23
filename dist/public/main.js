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
/***/ (() => {

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
  var expected = expect(11);
  var value = "5/07/2022";
  var result = getDiffDays(value);

  if (result === expected) {
    console.log("SUCCSS; testValidateBirthday: ".concat(expected, " === ").concat(result));
  } else {
    console.log("FAIL; testValidateBirthday: ".concat(expected, " === ").concat(result));
  }
}

function expect(val) {
  setInterval(function () {
    val++;
  }, 86400000);
  return val;
}

function testExpect() {
  var expected = 11;
  var val = 11;
  var result = expect(val);
  console.log("testExpect ".concat(result, " ;; ").concat(expected));
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

testExpect();
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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    background-color: cornflowerblue;\n}", "",{"version":3,"sources":["webpack://./src/public/other.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;AACpC","sourcesContent":["body{\n    background-color: cornflowerblue;\n}"],"sourceRoot":""}]);
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

var style = __webpack_require__(/*! ./main.css */ "./src/public/main.css");

var styletwo = __webpack_require__(/*! ./other.css */ "./src/public/other.css"); // Document


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLFNBQVNBLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0VBQ3ZCLElBQUlDLFVBQVUsR0FBRztJQUNmQyxpQkFBaUIsRUFBRSxLQURKO0lBRWZDLGNBQWMsRUFBRSxLQUZEO0lBR2ZDLGlCQUFpQixFQUFFO0VBSEosQ0FBakI7RUFNQSxJQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0wsVUFBRCxFQUFhRCxHQUFiLENBQTNCO0VBQ0EsSUFBTU8sZ0JBQWdCLEdBQUdDLFNBQVMsQ0FBQ0gsVUFBRCxDQUFsQztFQUNBLE9BQU9FLGdCQUFQLENBVHVCLENBVXZCO0VBQ0E7RUFDQTtFQUNBO0FBQ0Q7O0FBRUQsU0FBU0MsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7RUFDdEIsSUFBUVAsaUJBQVIsR0FBaUVPLEdBQWpFLENBQVFQLGlCQUFSO0VBQUEsSUFBMkJDLGNBQTNCLEdBQWlFTSxHQUFqRSxDQUEyQk4sY0FBM0I7RUFBQSxJQUEyQ0MsaUJBQTNDLEdBQWlFSyxHQUFqRSxDQUEyQ0wsaUJBQTNDOztFQUNBLElBQUlGLGlCQUFKLEVBQXVCO0lBQ3JCLElBQUlFLGlCQUFKLEVBQXVCO01BQ3JCLElBQUlELGNBQUosRUFBb0I7UUFDbEIsT0FBTyxjQUFQO01BQ0QsQ0FGRCxNQUVPO1FBQ0wsT0FBTyxnQ0FBUDtNQUNEO0lBQ0YsQ0FORCxNQU1PO01BQ0wsT0FBTyx3Q0FBUDtJQUNEO0VBQ0YsQ0FWRCxNQVVPO0lBQ0wsT0FBTyx3Q0FBUDtFQUNEO0FBQ0Y7O0FBRUQsU0FBU0csUUFBVCxDQUFrQkcsR0FBbEIsRUFBdUJULEdBQXZCLEVBQTRCO0VBQzFCLElBQUlBLEdBQUcsQ0FBQ1UsTUFBSixJQUFjLENBQWQsSUFBbUJWLEdBQUcsQ0FBQ1UsTUFBSixJQUFjLEVBQXJDLEVBQXlDO0lBQ3ZDLElBQU1DLGNBQWMsR0FBR0MsU0FBUyxDQUFDSCxHQUFELEVBQU1ULEdBQU4sQ0FBaEM7SUFDQSxPQUFPVyxjQUFQO0VBQ0QsQ0FIRCxNQUdPO0lBQ0wsT0FBTyx1QkFBUDtFQUNEO0FBQ0Y7O0FBQ0QsU0FBU0UsWUFBVCxHQUF3QjtFQUN0QixJQUFJQyxjQUFjLEdBQUc7SUFDbkJYLGNBQWMsRUFBRSxLQURHO0lBRW5CRCxpQkFBaUIsRUFBRSxLQUZBO0lBR25CRSxpQkFBaUIsRUFBRTtFQUhBLENBQXJCO0VBS0EsSUFBTVcsYUFBYSxHQUFHLFFBQXRCO0VBQ0EsSUFBTUMsWUFBWSxHQUFHLHVCQUFyQjtFQUNBLElBQU1DLFVBQVUsR0FBR1gsUUFBUSxDQUFDUSxjQUFELEVBQWlCQyxhQUFqQixDQUEzQjtFQUVBLElBQU1HLGFBQWEsR0FBR1osUUFBUSxDQUFDUSxjQUFELEVBQWlCLFlBQWpCLENBQTlCOztFQUNBLElBQU1LLGdCQUFnQixXQUFVRCxhQUFWLENBQXRCOztFQUVBLElBQUlDLGdCQUFnQixLQUFLLFFBQXJCLElBQWlDRixVQUFVLEtBQUtELFlBQXBELEVBQWtFO0lBQ2hFSSxPQUFPLENBQUNDLEdBQVIsNENBQ3NDRixnQkFEdEMsdUNBQ21GRixVQURuRixrQkFDcUdELFlBRHJHO0VBR0QsQ0FKRCxNQUlPO0lBQ0xJLE9BQU8sQ0FBQ0MsR0FBUiw4QkFBa0NGLGdCQUFsQztFQUNEO0FBQ0Y7O0FBQ0ROLFlBQVk7O0FBRVosU0FBU0QsU0FBVCxDQUFtQkgsR0FBbkIsRUFBd0JULEdBQXhCLEVBQTZCO0VBQzNCLEtBQUssSUFBSXNCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd0QixHQUFHLENBQUNVLE1BQXhCLEVBQWdDWSxDQUFDLEVBQWpDLEVBQXFDO0lBQ25DLElBQUl0QixHQUFHLENBQUN1QixVQUFKLENBQWVELENBQWYsS0FBcUIsRUFBckIsSUFBMkJ0QixHQUFHLENBQUN1QixVQUFKLENBQWVELENBQWYsS0FBcUIsRUFBcEQsRUFBd0Q7TUFDdERiLEdBQUcsQ0FBQ0wsaUJBQUosR0FBd0IsSUFBeEI7SUFDRDs7SUFDRCxJQUFJSixHQUFHLENBQUN1QixVQUFKLENBQWVELENBQWYsS0FBcUIsRUFBckIsSUFBMkJ0QixHQUFHLENBQUN1QixVQUFKLENBQWVELENBQWYsS0FBcUIsR0FBcEQsRUFBeUQ7TUFDdkRiLEdBQUcsQ0FBQ1AsaUJBQUosR0FBd0IsSUFBeEI7SUFDRDs7SUFDRCxJQUFJc0IsU0FBUyxDQUFDeEIsR0FBRCxDQUFiLEVBQW9CO01BQ2xCUyxHQUFHLENBQUNOLGNBQUosR0FBcUIsSUFBckI7SUFDRDtFQUNGOztFQUNELE9BQU9NLEdBQVA7QUFDRDs7QUFFRCxTQUFTZ0IsYUFBVCxHQUF5QjtFQUN2QixJQUFJQyxPQUFPLEdBQUc7SUFDWnZCLGNBQWMsRUFBRSxLQURKO0lBRVpELGlCQUFpQixFQUFFLEtBRlA7SUFHWkUsaUJBQWlCLEVBQUU7RUFIUCxDQUFkO0VBS0EsSUFBTXVCLEtBQUssR0FBRyxjQUFkO0VBQ0EsSUFBTUMsV0FBVyxHQUFHO0lBQ2xCekIsY0FBYyxFQUFFLElBREU7SUFFbEJELGlCQUFpQixFQUFFLElBRkQ7SUFHbEJFLGlCQUFpQixFQUFFO0VBSEQsQ0FBcEI7RUFLQSxJQUFNeUIsTUFBTSxHQUFHakIsU0FBUyxDQUFDYyxPQUFELEVBQVVDLEtBQVYsQ0FBeEI7O0VBQ0EsSUFDRUUsTUFBTSxDQUFDMUIsY0FBUCxLQUEwQnlCLFdBQVcsQ0FBQ3pCLGNBQXRDLElBQ0EwQixNQUFNLENBQUMzQixpQkFBUCxLQUE2QjBCLFdBQVcsQ0FBQzFCLGlCQUR6QyxJQUVBMkIsTUFBTSxDQUFDekIsaUJBQVAsS0FBNkJ3QixXQUFXLENBQUN4QixpQkFIM0MsRUFJRTtJQUNBZ0IsT0FBTyxDQUFDQyxHQUFSLDhDQUVLSyxPQUFPLENBQUN2QixjQUFSLEVBQ0R1QixPQUFPLENBQUN4QixpQkFEUCxFQUVEd0IsT0FBTyxDQUFDdEIsaUJBSlosNEJBTUt5QixNQUFNLENBQUMxQixjQUFQLEVBQ0QwQixNQUFNLENBQUMzQixpQkFETixFQUVEMkIsTUFBTSxDQUFDekIsaUJBUlg7RUFXRCxDQWhCRCxNQWdCTztJQUNMZ0IsT0FBTyxDQUFDQyxHQUFSLDhDQUVLSyxPQUFPLENBQUN2QixjQUFSLEVBQ0R1QixPQUFPLENBQUN4QixpQkFEUCxFQUVEd0IsT0FBTyxDQUFDdEIsaUJBSlosNEJBTUt5QixNQUFNLENBQUMxQixjQUFQLEVBQ0QwQixNQUFNLENBQUMzQixpQkFETixFQUVEMkIsTUFBTSxDQUFDekIsaUJBUlg7RUFXRDtBQUNGOztBQUVELFNBQVNvQixTQUFULENBQW1CTSxHQUFuQixFQUF3QjtFQUN0QixPQUFPLEtBQUtDLElBQUwsQ0FBVUQsR0FBVixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsYUFBVCxHQUF5QjtFQUN2QixJQUFNQyxRQUFRLEdBQUcsSUFBakI7RUFDQSxJQUFNQyxNQUFNLEdBQUcsYUFBZjtFQUNBLElBQU1MLE1BQU0sR0FBR0wsU0FBUyxDQUFDVSxNQUFELENBQXhCO0VBRUFMLE1BQU0sS0FBS0ksUUFBWCxHQUNJYixPQUFPLENBQUNDLEdBQVIsd0NBQTRDWSxRQUE1QyxrQkFBNERKLE1BQTVELEVBREosR0FFSVQsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVosQ0FGSjtBQUdEOztBQUNEVyxhQUFhO0FBQ2JQLGFBQWE7QUFFYlUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0VBQUVyQyxVQUFVLEVBQVZBO0FBQUYsQ0FBakI7Ozs7Ozs7Ozs7QUMxSUEsSUFBTXNDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7O0FBRUEsU0FBU0MsTUFBVCxHQUE4QjtFQUFBLElBQWRDLElBQWMsdUVBQVAsS0FBTzs7RUFDNUIsSUFBSUEsSUFBSixFQUFVO0lBQUEsSUFHQ0MsR0FIRCxHQUdSLFNBQVNBLEdBQVQsR0FBZTtNQUNiQyxJQUFJLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQixJQUFoQixDQUFKO0lBQ0QsQ0FMTzs7SUFDUixJQUFJQSxNQUFNLEdBQUcsR0FBYjtJQUNBLElBQUlELEtBQUo7SUFJQSxPQUFPRixHQUFHLEVBQVY7RUFDRCxDQVBELE1BT087SUFDTCxPQUFPLENBQUMsQ0FBUjtFQUNEO0FBQ0Y7O0FBQ0RGLE1BQU0sQ0FBQyxJQUFELENBQU47O0FBRUEsU0FBU0csSUFBVCxDQUFjQyxLQUFkLEVBQXFCRSxLQUFyQixFQUEyQkwsSUFBM0IsRUFBaUM7RUFDL0IsSUFBR0EsSUFBSCxFQUFRO0lBQ04sS0FBS0csS0FBSyxHQUFHLENBQWIsRUFBZ0JBLEtBQUssR0FBRyxFQUF4QixFQUE0QkEsS0FBSyxFQUFqQyxFQUFxQztNQUNuQ1AsSUFBSSxDQUFDVSxTQUFMLGNBQXFCRCxLQUFJLENBQUNFLFFBQUwsQ0FBY0osS0FBZCxFQUFxQkUsS0FBckIsQ0FBckI7SUFDRDtFQUNGO0FBQ0Y7O0FBRUQsU0FBU0csUUFBVCxHQUFvQjtFQUNsQjtFQUNBLElBQUlMLEtBQUo7RUFDQSxJQUFJTSxJQUFJLEdBQUcsR0FBWDtFQUNBLElBQUlyQixNQUFNLEdBQUdjLElBQUksQ0FBQ0MsS0FBRCxFQUFRTSxJQUFSLENBQWpCOztFQUNBLElBQUlyQixNQUFNLEtBQUtzQixTQUFmLEVBQTBCO0lBQ3hCL0IsT0FBTyxDQUFDQyxHQUFSLDhCQUFrQ1EsTUFBbEMsa0JBQWdEc0IsU0FBaEQ7RUFDRCxDQUZELE1BRU87SUFDTC9CLE9BQU8sQ0FBQ0MsR0FBUiwyQkFBK0JRLE1BQS9CLGtCQUE2Q3NCLFNBQTdDO0VBQ0Q7QUFDRjs7QUFDRCxTQUFTQyxVQUFULEdBQXNCO0VBQ3BCLElBQU12QixNQUFNLEdBQUdXLE1BQU0sRUFBckI7O0VBQ0EsSUFBSVgsTUFBTSxLQUFLLENBQUMsQ0FBaEIsRUFBbUI7SUFDakJULE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0VBQ0QsQ0FGRCxNQUVPO0lBQ0xELE9BQU8sQ0FBQ0MsR0FBUiw0QkFBZ0NRLE1BQWhDO0VBQ0Q7QUFDRjs7QUFFRG9CLFFBQVE7QUFDUkcsVUFBVTs7Ozs7Ozs7OztBQzlDVixTQUFTQyxnQkFBVCxDQUEwQnJELEdBQTFCLEVBQStCO0VBQzdCLElBQU1zRCxRQUFRLEdBQUdDLFdBQVcsQ0FBQ3ZELEdBQUQsQ0FBNUI7RUFDQSxJQUFNd0QsY0FBYyxHQUFHQyxTQUFTLENBQUNILFFBQUQsQ0FBaEM7RUFDQSxPQUFPRSxjQUFQO0FBQ0Q7O0FBRUQsU0FBU0QsV0FBVCxDQUFxQnZELEdBQXJCLEVBQTBCO0VBQ3hCLElBQU0wRCxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTM0QsR0FBVCxDQUFkO0VBQ0EsSUFBTTRELEtBQUssR0FBRyxJQUFJRCxJQUFKLENBQVNBLElBQUksQ0FBQ0UsR0FBTCxFQUFULENBQWQ7RUFDQSxJQUFNQyxRQUFRLEdBQUdGLEtBQUssR0FBR0YsS0FBekI7RUFDQSxJQUFNSixRQUFRLEdBQUdTLElBQUksQ0FBQ0MsSUFBTCxDQUFVRixRQUFRLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFsQixDQUFqQjtFQUNBLE9BQU9SLFFBQVA7QUFDRDs7QUFDRCxTQUFTVyxlQUFULEdBQTJCO0VBQ3pCLElBQU1oQyxRQUFRLEdBQUdpQyxNQUFNLENBQUMsRUFBRCxDQUF2QjtFQUNBLElBQU12QyxLQUFLLEdBQUcsV0FBZDtFQUNBLElBQU1FLE1BQU0sR0FBRzBCLFdBQVcsQ0FBQzVCLEtBQUQsQ0FBMUI7O0VBRUEsSUFBSUUsTUFBTSxLQUFLSSxRQUFmLEVBQXlCO0lBQ3ZCYixPQUFPLENBQUNDLEdBQVIseUNBQTZDWSxRQUE3QyxrQkFBNkRKLE1BQTdEO0VBQ0QsQ0FGRCxNQUVPO0lBQ0xULE9BQU8sQ0FBQ0MsR0FBUix1Q0FBMkNZLFFBQTNDLGtCQUEyREosTUFBM0Q7RUFDRDtBQUNGOztBQUNELFNBQVNxQyxNQUFULENBQWdCbEUsR0FBaEIsRUFBb0I7RUFDbEJtRSxXQUFXLENBQUMsWUFBSTtJQUNkbkUsR0FBRztFQUNKLENBRlUsRUFFUixRQUZRLENBQVg7RUFHQSxPQUFPQSxHQUFQO0FBQ0Q7O0FBQ0QsU0FBU29FLFVBQVQsR0FBcUI7RUFDbkIsSUFBTW5DLFFBQVEsR0FBRyxFQUFqQjtFQUNBLElBQU1qQyxHQUFHLEdBQUcsRUFBWjtFQUNBLElBQU02QixNQUFNLEdBQUdxQyxNQUFNLENBQUNsRSxHQUFELENBQXJCO0VBQ0FvQixPQUFPLENBQUNDLEdBQVIsc0JBQTBCUSxNQUExQixpQkFBdUNJLFFBQXZDO0FBQ0Q7O0FBR0QsU0FBU3dCLFNBQVQsQ0FBbUJILFFBQW5CLEVBQTZCO0VBQzNCLElBQUlBLFFBQVEsR0FBRyxJQUFmLEVBQXFCO0lBQ25CLE9BQU9BLFFBQVA7RUFDRCxDQUZELE1BRU87SUFDTDtFQUNEO0FBQ0Y7O0FBQ0QsU0FBU2UsYUFBVCxHQUF5QjtFQUN2QixJQUFNcEMsUUFBUSxtQ0FBZDtFQUNBLElBQU1OLEtBQUssR0FBRyxJQUFkO0VBQ0EsSUFBTUUsTUFBTSxHQUFHNEIsU0FBUyxDQUFDOUIsS0FBRCxDQUF4Qjs7RUFFQSxJQUFJRSxNQUFNLEtBQUtJLFFBQWYsRUFBeUI7SUFDdkJiLE9BQU8sQ0FBQ0MsR0FBUiwwQ0FBOENZLFFBQTlDLDBCQUFzRUosTUFBdEU7RUFDRCxDQUZELE1BRU87SUFDTFQsT0FBTyxDQUFDQyxHQUFSLHdDQUE0Q1ksUUFBNUMsMEJBQW9FSixNQUFwRTtFQUNEO0FBQ0Y7O0FBQ0R1QyxVQUFVO0FBQ1ZDLGFBQWE7QUFDYkosZUFBZTtBQUdmOUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0VBQUVpQixnQkFBZ0IsRUFBaEJBO0FBQUYsQ0FBakI7Ozs7Ozs7Ozs7QUM3REEsU0FBU2lCLGFBQVQsQ0FBdUI3RCxHQUF2QixFQUE0QjtFQUMxQixJQUFNOEQsU0FBTixHQUE4QjlELEdBQTlCLENBQU04RCxTQUFOO0VBQUEsSUFBaUJDLFFBQWpCLEdBQThCL0QsR0FBOUIsQ0FBaUIrRCxRQUFqQjs7RUFDQSxJQUFJRCxTQUFKLEVBQWU7SUFDYixJQUFJQyxRQUFKLEVBQWM7TUFDWixPQUFPLG9DQUFQO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsT0FBTyxrQkFBUDtJQUNEO0VBQ0YsQ0FORCxNQU1PO0lBQ0wsT0FBTyxrQkFBUDtFQUNELENBVnlCLENBVzFCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBQ0Q7O0FBRUQsU0FBU0MsaUJBQVQsR0FBNkI7RUFDM0IsSUFBSUMsZ0JBQWdCLEdBQUc7SUFDckJILFNBQVMsRUFBRSxFQURVO0lBRXJCQyxRQUFRLEVBQUU7RUFGVyxDQUF2QjtFQUlBLElBQUlHLGVBQWUsR0FBRztJQUNwQkosU0FBUyxFQUFFLFdBRFM7SUFFcEJDLFFBQVEsRUFBRTtFQUZVLENBQXRCO0VBSUEsSUFBSUksT0FBTyxHQUFHO0lBQ1pMLFNBQVMsRUFBRSxXQURDO0lBRVpDLFFBQVEsRUFBRTtFQUZFLENBQWQ7RUFJQSxJQUFNSyx3QkFBd0IsR0FBRyxrQkFBakM7RUFDQSxJQUFNQyx1QkFBdUIsR0FBRyxrQkFBaEM7RUFDQSxJQUFNQyxlQUFlLEdBQUcsb0NBQXhCO0VBRUEsSUFBTUMsc0JBQXNCLEdBQUdWLGFBQWEsQ0FBQ0ksZ0JBQUQsQ0FBNUM7RUFDQSxJQUFNTyxxQkFBcUIsR0FBR1gsYUFBYSxDQUFDSyxlQUFELENBQTNDO0VBQ0EsSUFBTU8sYUFBYSxHQUFHWixhQUFhLENBQUNNLE9BQUQsQ0FBbkM7O0VBRUEsSUFDRUksc0JBQXNCLElBQUlILHdCQUExQixJQUNBSSxxQkFBcUIsSUFBSUgsdUJBRHpCLElBRUFDLGVBQWUsSUFBSUcsYUFIckIsRUFJRTtJQUNBOUQsT0FBTyxDQUFDQyxHQUFSLHdEQUNrRCxDQUM5Q3dELHdCQUQ4QyxFQUU5Q0MsdUJBRjhDLEVBRzlDQyxlQUg4QyxDQURsRCx5QkFLa0IsQ0FDZEMsc0JBRGMsRUFFZEMscUJBRmMsRUFHZEYsZUFIYyxDQUxsQjtFQVdELENBaEJELE1BZ0JPO0lBQ0wzRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0VBQ0Q7QUFDRjs7QUFDRG9ELGlCQUFpQjtBQUNqQnRDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtFQUFFa0MsYUFBYSxFQUFiQTtBQUFGLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsd0tBQTZEO0FBQ3pHLDRDQUE0QyxrTEFBa0U7QUFDOUcsNENBQTRDLHNLQUE0RDtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkNBQTZDLGNBQWMsZUFBZSx1QkFBdUIsR0FBRyxTQUFTLG9CQUFvQixrQkFBa0Isa0NBQWtDLFdBQVcsd0JBQXdCLGNBQWMsaUJBQWlCLGlCQUFpQixzQkFBc0IsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsWUFBWSxzQkFBc0IsdUJBQXVCLEdBQUcsc0JBQXNCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIscUJBQXFCLHNCQUFzQix3QkFBd0IsR0FBRyxXQUFXLHlCQUF5QixzQkFBc0IsaUJBQWlCLGtCQUFrQixrQkFBa0Isa0NBQWtDLHdCQUF3QixxQkFBcUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLHVCQUF1QixHQUFHLFFBQVEsc0VBQXNFLGlCQUFpQiwyQkFBMkIsR0FBRyxtQ0FBbUMsa0JBQWtCLG1DQUFtQyxpQkFBaUIsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcsNEJBQTRCLGtCQUFrQiwyQkFBMkIsR0FBRywrQkFBK0IsdUJBQXVCLHdCQUF3QixHQUFHLDBCQUEwQixrQkFBa0IsdUJBQXVCLHdCQUF3QixHQUFHLDBCQUEwQixzQkFBc0IsR0FBRyxXQUFXLGdCQUFnQixpQkFBaUIsd0JBQXdCLHVCQUF1QixHQUFHLGdCQUFnQiw0Q0FBNEMscUJBQXFCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixvQkFBb0IsR0FBRyxtQkFBbUIsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxrQkFBa0IscUJBQXFCLHFCQUFxQixvQkFBb0IsR0FBRyxxQkFBcUIsdUJBQXVCLHFCQUFxQix3QkFBd0IscUJBQXFCLHFCQUFxQixvQkFBb0Isd0JBQXdCLHdCQUF3QixHQUFHLGtCQUFrQiwwQkFBMEIseUJBQXlCLHFCQUFxQixzQkFBc0Isc0NBQXNDLHNCQUFzQixxQkFBcUIsb0JBQW9CLEdBQUcscUNBQXFDLGlCQUFpQixzRUFBc0UsaUNBQWlDLDZCQUE2QixHQUFHLGtDQUFrQyxpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLGdDQUFnQyxHQUFHLHFDQUFxQyxtQ0FBbUMsR0FBRyxvQ0FBb0Msc0JBQXNCLHVCQUF1Qix3QkFBd0IscUJBQXFCLEdBQUcsaUNBQWlDLGlCQUFpQixHQUFHLDJGQUEyRixrQkFBa0IsNEJBQTRCLHdCQUF3QiwyQkFBMkIsR0FBRyx3REFBd0Qsd0JBQXdCLDBCQUEwQixvQkFBb0IseUJBQXlCLEdBQUcseURBQXlELGlDQUFpQyx3QkFBd0IsdUJBQXVCLEdBQUcscUVBQXFFLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixpQkFBaUIsR0FBRyx3REFBd0Qsc0JBQXNCLDJCQUEyQixvQkFBb0IseUJBQXlCLEdBQUcseURBQXlELGlDQUFpQyx3QkFBd0IsMkJBQTJCLEdBQUcscUVBQXFFLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixpQkFBaUIsR0FBRyx3REFBd0Qsc0JBQXNCLDBCQUEwQixvQkFBb0IseUJBQXlCLEdBQUcseURBQXlELGlDQUFpQyx3QkFBd0IseUJBQXlCLEdBQUcsdUVBQXVFLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixpQkFBaUIsR0FBRyx3REFBd0Qsc0JBQXNCLDJCQUEyQixvQkFBb0IseUJBQXlCLEdBQUcseURBQXlELGlDQUFpQyx3QkFBd0IseUJBQXlCLEdBQUcsYUFBYSxrQkFBa0Isc0VBQXNFLDJCQUEyQixpQ0FBaUMsR0FBRyxlQUFlLGdCQUFnQixxQkFBcUIsR0FBRyxrQkFBa0IscUJBQXFCLHNCQUFzQixHQUFHLGFBQWEsc0JBQXNCLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHLDRCQUE0QixxQkFBcUIsR0FBRyxzQkFBc0IscUJBQXFCLHFCQUFxQixpQkFBaUIsbUNBQW1DLHVCQUF1Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcseUJBQXlCLG9CQUFvQixhQUFhLFlBQVksZ0JBQWdCLGlDQUFpQyxHQUFHLFNBQVMsc0ZBQXNGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFB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Q0FBQ21CLFFBQUwsQ0FBY3ZGLEtBQWYsQ0FBMUI7RUFDQSxJQUFNd0YsQ0FBQyxHQUFHN0MsYUFBYSxDQUFDO0lBQ3RCQyxTQUFTLEVBQUV3QixJQUFJLENBQUNxQixLQUFMLENBQVd6RixLQURBO0lBRXRCNkMsUUFBUSxFQUFFdUIsSUFBSSxDQUFDc0IsS0FBTCxDQUFXMUY7RUFGQyxDQUFELENBQXZCO0VBSUFQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMEYsQ0FBWixFQUFlRSxDQUFmLEVBQWtCRSxDQUFsQjtFQUNBLElBQU1HLElBQUksMkJBQ0V2QixJQUFJLENBQUNxQixLQUFMLENBQVd6RixLQURiLGNBQ3NCb0UsSUFBSSxDQUFDc0IsS0FBTCxDQUFXMUYsS0FEakMsb0RBRXNCb0UsSUFBSSxDQUFDbUIsUUFBTCxDQUFjdkYsS0FGcEMsOENBSUVvRixDQUpGLGdDQUtFRSxDQUxGLGdDQU1FRSxDQU5GLGdCQUFWO0VBUUFkLFFBQVEsQ0FBQ3RELFNBQVQsSUFBc0J1RSxJQUF0QjtBQUNELENBbEJELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC8uL3NyYy9wdWJsaWMvVmFsaWRhdGVJRC5qcyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC8uL3NyYy9wdWJsaWMvb3RoZXIuanMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9zcmMvcHVibGljL3ZhbGlkYXRlQmlydGhkYXkuanMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9zcmMvcHVibGljL3ZhbGlkYXRlTmFtZXMuanMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9zcmMvcHVibGljL21haW4uY3NzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vc3JjL3B1YmxpYy9vdGhlci5jc3MiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vc3JjL3B1YmxpYy9tYWluLmNzcz9iNDhjIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0Ly4vc3JjL3B1YmxpYy9vdGhlci5jc3M/YjI1ZiIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlcGJhY2steW9yay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZXBiYWNrLXlvcmstcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VwYmFjay15b3JrLXByb2plY3QvLi9zcmMvcHVibGljL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB2YWxpZGF0ZUlEKHZhbCkge1xuICBsZXQgY29udGFpbk9iaiA9IHtcbiAgICBjb250YWluc0xvd2VyY2FzZTogZmFsc2UsXG4gICAgY29udGFpbnNOdW1iZXI6IGZhbHNlLFxuICAgIGNvbnRhaW5zVXBwZXJDYXNlOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCB2YWxpZE9yTm90ID0gY29udGFpbnMoY29udGFpbk9iaiwgdmFsKTtcbiAgY29uc3QgVmFsaWRVc2VySURDaGVjayA9IHZhbGlkYXRvcih2YWxpZE9yTm90KTtcbiAgcmV0dXJuIFZhbGlkVXNlcklEQ2hlY2s7XG4gIC8vIEFzayBhYm91dCByZXR1cm5zIGluIHRlcm5lcnkgb3BlcmF0b3JzXG4gIC8vIGNvbnRhaW5zTG93ZXJjYXNlID8gY29uc29sZS5sb2coXCJsb3dlclwiKSA6IGNvbnNvbGUubG9nKFwiZmFpbFwiKTtcbiAgLy8gY29udGFpbnNVcHBlckNhc2UgPyBjb25zb2xlLmxvZyhcInVwcGVyXCIpIDogY29uc29sZS5sb2coXCJmYWlsXCIpO1xuICAvLyBjb250YWluc051bWJlciA/IGNvbnNvbGUubG9nKFwibnVtYmVyXCIpIDogY29uc29sZS5sb2coXCJmYWlsXCIpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0b3Iob2JqKSB7XG4gIGNvbnN0IHsgY29udGFpbnNMb3dlcmNhc2UsIGNvbnRhaW5zTnVtYmVyLCBjb250YWluc1VwcGVyQ2FzZSB9ID0gb2JqO1xuICBpZiAoY29udGFpbnNMb3dlcmNhc2UpIHtcbiAgICBpZiAoY29udGFpbnNVcHBlckNhc2UpIHtcbiAgICAgIGlmIChjb250YWluc051bWJlcikge1xuICAgICAgICByZXR1cm4gXCJWYWxpZCBVc2VySURcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlBsZWFzZSBBIE51bWJlciBUbyBZb3VyIFVzZXJJRFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJQbGVhc2UgQWRkIEFuIFVwcGVyY2FzZSB0byBZb3VyIFN0cmluZ1wiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJQbGVhc2UgQWRkIEFuIExvd2VyY2FzZSB0byBZb3VyIFN0cmluZ1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKG9iaiwgdmFsKSB7XG4gIGlmICh2YWwubGVuZ3RoID49IDggJiYgdmFsLmxlbmd0aCA8PSAxMikge1xuICAgIGNvbnN0IHVwZGF0ZU9ialZhbHVlID0gdXBkYXRlT2JqKG9iaiwgdmFsKTtcbiAgICByZXR1cm4gdXBkYXRlT2JqVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiSUQgaXMgbm90IGxvbmcgZW5vdWdoXCI7XG4gIH1cbn1cbmZ1bmN0aW9uIHRlc3RDb250YWlucygpIHtcbiAgbGV0IHRlc3RTdWNjZXNzT2JqID0ge1xuICAgIGNvbnRhaW5zTnVtYmVyOiBmYWxzZSxcbiAgICBjb250YWluc0xvd2VyY2FzZTogZmFsc2UsXG4gICAgY29udGFpbnNVcHBlckNhc2U6IGZhbHNlLFxuICB9O1xuICBjb25zdCB0ZXN0RmFpbFZhbHVlID0gXCJzZmpkMzNcIjtcbiAgY29uc3QgZmFpbEV4cGVjdGVkID0gXCJJRCBpcyBub3QgbG9uZyBlbm91Z2hcIjtcbiAgY29uc3QgZmFpbFJlc3VsdCA9IGNvbnRhaW5zKHRlc3RTdWNjZXNzT2JqLCB0ZXN0RmFpbFZhbHVlKTtcblxuICBjb25zdCBzdWNjZXNzUmVzdWx0ID0gY29udGFpbnModGVzdFN1Y2Nlc3NPYmosIFwia3NmamxTRjM0M1wiKTtcbiAgY29uc3Qgc3VjZXNzUmVzdWx0VHlwZSA9IHR5cGVvZiBzdWNjZXNzUmVzdWx0O1xuXG4gIGlmIChzdWNlc3NSZXN1bHRUeXBlID09PSBcIm9iamVjdFwiICYmIGZhaWxSZXN1bHQgPT09IGZhaWxFeHBlY3RlZCkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYHRlc3RDb250YWluczogU3VjY2VzczsgZXhwZWN0ZWQ6ICR7c3VjZXNzUmVzdWx0VHlwZX0gPT09IG9iamVjdCBhbmQgZXhwZWN0ZWQ6ICR7ZmFpbFJlc3VsdH0gPT09ICR7ZmFpbEV4cGVjdGVkfWBcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGB0ZXN0Q29udGFpbnM6IEZBSUwgJHtzdWNlc3NSZXN1bHRUeXBlfWApO1xuICB9XG59XG50ZXN0Q29udGFpbnMoKTtcblxuZnVuY3Rpb24gdXBkYXRlT2JqKG9iaiwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbC5jaGFyQ29kZUF0KGkpID49IDY1ICYmIHZhbC5jaGFyQ29kZUF0KGkpIDw9IDkwKSB7XG4gICAgICBvYmouY29udGFpbnNVcHBlckNhc2UgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsLmNoYXJDb2RlQXQoaSkgPj0gOTcgJiYgdmFsLmNoYXJDb2RlQXQoaSkgPD0gMTIyKSB7XG4gICAgICBvYmouY29udGFpbnNMb3dlcmNhc2UgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaGFzTnVtYmVyKHZhbCkpIHtcbiAgICAgIG9iai5jb250YWluc051bWJlciA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHRlc3RVcGRhdGVPYmooKSB7XG4gIGxldCB0ZXN0T2JqID0ge1xuICAgIGNvbnRhaW5zTnVtYmVyOiBmYWxzZSxcbiAgICBjb250YWluc0xvd2VyY2FzZTogZmFsc2UsXG4gICAgY29udGFpbnNVcHBlckNhc2U6IGZhbHNlLFxuICB9O1xuICBjb25zdCB2YWx1ZSA9IFwiYXNmZDEyM0BTc2RmXCI7XG4gIGNvbnN0IGV4cGVjdGVkT2JqID0ge1xuICAgIGNvbnRhaW5zTnVtYmVyOiB0cnVlLFxuICAgIGNvbnRhaW5zTG93ZXJjYXNlOiB0cnVlLFxuICAgIGNvbnRhaW5zVXBwZXJDYXNlOiB0cnVlLFxuICB9O1xuICBjb25zdCByZXN1bHQgPSB1cGRhdGVPYmoodGVzdE9iaiwgdmFsdWUpO1xuICBpZiAoXG4gICAgcmVzdWx0LmNvbnRhaW5zTnVtYmVyID09PSBleHBlY3RlZE9iai5jb250YWluc051bWJlciAmJlxuICAgIHJlc3VsdC5jb250YWluc0xvd2VyY2FzZSA9PT0gZXhwZWN0ZWRPYmouY29udGFpbnNMb3dlcmNhc2UgJiZcbiAgICByZXN1bHQuY29udGFpbnNVcHBlckNhc2UgPT09IGV4cGVjdGVkT2JqLmNvbnRhaW5zVXBwZXJDYXNlXG4gICkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYHRlc3RVcGRhdGVPYmo6IFN1Y2Nlc3M7IEV4cGVjdGVkOiAke1xuICAgICAgICAodGVzdE9iai5jb250YWluc051bWJlcixcbiAgICAgICAgdGVzdE9iai5jb250YWluc0xvd2VyY2FzZSxcbiAgICAgICAgdGVzdE9iai5jb250YWluc1VwcGVyQ2FzZSlcbiAgICAgIH0gYW5kICBSZXN1bHQgJHtcbiAgICAgICAgKHJlc3VsdC5jb250YWluc051bWJlcixcbiAgICAgICAgcmVzdWx0LmNvbnRhaW5zTG93ZXJjYXNlLFxuICAgICAgICByZXN1bHQuY29udGFpbnNVcHBlckNhc2UpXG4gICAgICB9YFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgdGVzdFVwZGF0ZU9iajogRmFpbHVyZTsgRXhwZWN0ZWQ6ICR7XG4gICAgICAgICh0ZXN0T2JqLmNvbnRhaW5zTnVtYmVyLFxuICAgICAgICB0ZXN0T2JqLmNvbnRhaW5zTG93ZXJjYXNlLFxuICAgICAgICB0ZXN0T2JqLmNvbnRhaW5zVXBwZXJDYXNlKVxuICAgICAgfSBhbmQgIFJlc3VsdCAke1xuICAgICAgICAocmVzdWx0LmNvbnRhaW5zTnVtYmVyLFxuICAgICAgICByZXN1bHQuY29udGFpbnNMb3dlcmNhc2UsXG4gICAgICAgIHJlc3VsdC5jb250YWluc1VwcGVyQ2FzZSlcbiAgICAgIH1gXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNOdW1iZXIoc3RyKSB7XG4gIHJldHVybiAvXFxkLy50ZXN0KHN0cik7XG59XG5cbmZ1bmN0aW9uIHRlc3RIYXNOdW1iZXIoKSB7XG4gIGNvbnN0IGV4cGVjdGVkID0gdHJ1ZTtcbiAgY29uc3Qgc3RyaW5nID0gXCJhbmFja2wjQCM9M1wiO1xuICBjb25zdCByZXN1bHQgPSBoYXNOdW1iZXIoc3RyaW5nKTtcblxuICByZXN1bHQgPT09IGV4cGVjdGVkXG4gICAgPyBjb25zb2xlLmxvZyhgaGFzTnVtYmVyIGZ1bmN0aW9uOiBzdWNjZXNzOyAke2V4cGVjdGVkfSA9PT0gJHtyZXN1bHR9YClcbiAgICA6IGNvbnNvbGUubG9nKFwiaGFzTnVtYmVyIGZ1bmN0aW9uOiBGQUlMRURcIik7XG59XG50ZXN0SGFzTnVtYmVyKCk7XG50ZXN0VXBkYXRlT2JqKCk7XG5cbm1vZHVsZS5leHBvcnRzID0geyB2YWxpZGF0ZUlEIH07XG4iLCJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuZnVuY3Rpb24gcGFkaW5nKGJvb2wgPSBmYWxzZSkge1xuICBpZiAoYm9vbCkge1xuICAgIGxldCBsZXR0ZXIgPSBcInhcIjtcbiAgICBsZXQgaW5kZXg7XG4gICAgZnVuY3Rpb24gcGFkKCkge1xuICAgICAgbG9vcChpbmRleCwgbGV0dGVyLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhZCgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAtMTtcbiAgfVxufVxucGFkaW5nKHRydWUpO1xuXG5mdW5jdGlvbiBsb29wKGluZGV4LCBjaGFyLCBib29sKSB7XG4gIGlmKGJvb2wpe1xuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IDIxOyBpbmRleCsrKSB7XG4gICAgICBib2R5LmlubmVySFRNTCArPSBgJHtjaGFyLnBhZFN0YXJ0KGluZGV4LCBjaGFyKX0gPGJyPmA7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RMb29wKCkge1xuICAvL3Nob3VsZCBub3QgcmV0dXJuIGFueXRoaW5nLCBleHBlY2V0IHVuZGVpbmVkXG4gIGxldCBpbmRleDtcbiAgbGV0IGNoYXQgPSBcInhcIjtcbiAgbGV0IHJlc3VsdCA9IGxvb3AoaW5kZXgsIGNoYXQpO1xuICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmxvZyhgdGVzdExPT1A7IFN1Y2Nlc3M6ICR7cmVzdWx0fSA9PT0gJHt1bmRlZmluZWR9YCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYHRlc3RMb29wOiBmYWlsOyAke3Jlc3VsdH0gIT09ICR7dW5kZWZpbmVkfWApO1xuICB9XG59XG5mdW5jdGlvbiB0ZXN0UGFkaW5nKCkge1xuICBjb25zdCByZXN1bHQgPSBwYWRpbmcoKTtcbiAgaWYgKHJlc3VsdCA9PT0gLTEpIHtcbiAgICBjb25zb2xlLmxvZyhcInRlc3RQYWRpbmc6IFN1Y2Nlc3NcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYHRlc3RQYWRpbmc6IEZhaWwgJHtyZXN1bHR9YCk7XG4gIH1cbn1cblxudGVzdExvb3AoKTtcbnRlc3RQYWRpbmcoKTtcbiIsImZ1bmN0aW9uIHZhbGlkYXRlQmlydGhkYXkodmFsKSB7XG4gIGNvbnN0IGRpZmZEYXlzID0gZ2V0RGlmZkRheXModmFsKTtcbiAgY29uc3Qgb2xkRW5vdWdoVmFsdWUgPSBvbGRFbm91Z2goZGlmZkRheXMpO1xuICByZXR1cm4gb2xkRW5vdWdoVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldERpZmZEYXlzKHZhbCkge1xuICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKHZhbCk7XG4gIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XG4gIGNvbnN0IGRpZmZUaW1lID0gZGF0ZTIgLSBkYXRlMTtcbiAgY29uc3QgZGlmZkRheXMgPSBNYXRoLmNlaWwoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICByZXR1cm4gZGlmZkRheXM7XG59XG5mdW5jdGlvbiB0ZXN0R2V0RGlmZkRheXMoKSB7XG4gIGNvbnN0IGV4cGVjdGVkID0gZXhwZWN0KDExKTtcbiAgY29uc3QgdmFsdWUgPSBcIjUvMDcvMjAyMlwiO1xuICBjb25zdCByZXN1bHQgPSBnZXREaWZmRGF5cyh2YWx1ZSk7XG5cbiAgaWYgKHJlc3VsdCA9PT0gZXhwZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZyhgU1VDQ1NTOyB0ZXN0VmFsaWRhdGVCaXJ0aGRheTogJHtleHBlY3RlZH0gPT09ICR7cmVzdWx0fWApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGBGQUlMOyB0ZXN0VmFsaWRhdGVCaXJ0aGRheTogJHtleHBlY3RlZH0gPT09ICR7cmVzdWx0fWApO1xuICB9XG59XG5mdW5jdGlvbiBleHBlY3QodmFsKXtcbiAgc2V0SW50ZXJ2YWwoKCk9PntcbiAgICB2YWwrK1xuICB9LCA4NjQwMDAwMClcbiAgcmV0dXJuIHZhbFxufVxuZnVuY3Rpb24gdGVzdEV4cGVjdCgpe1xuICBjb25zdCBleHBlY3RlZCA9IDExXG4gIGNvbnN0IHZhbCA9IDExXG4gIGNvbnN0IHJlc3VsdCA9IGV4cGVjdCh2YWwpXG4gIGNvbnNvbGUubG9nKGB0ZXN0RXhwZWN0ICR7cmVzdWx0fSA7OyAke2V4cGVjdGVkfWApXG59XG5cblxuZnVuY3Rpb24gb2xkRW5vdWdoKGRpZmZEYXlzKSB7XG4gIGlmIChkaWZmRGF5cyA+IDY1NzApIHtcbiAgICByZXR1cm4gZGlmZkRheXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBZb3UgYXJlIHRvbyBZb3VuZywgR28gT3V0c2lkZSFgO1xuICB9XG59XG5mdW5jdGlvbiB0ZXN0T2xkRW5vdWdoKCkge1xuICBjb25zdCBleHBlY3RlZCA9IGBZb3UgYXJlIHRvbyBZb3VuZywgR28gT3V0c2lkZSFgO1xuICBjb25zdCB2YWx1ZSA9IDY1Njk7XG4gIGNvbnN0IHJlc3VsdCA9IG9sZEVub3VnaCh2YWx1ZSk7XG5cbiAgaWYgKHJlc3VsdCA9PT0gZXhwZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZyhgU1VDQ1NTO3Rlc3RPbGRFbm91Z2ggZXhwZWN0ZWQ6ICR7ZXhwZWN0ZWR9ID09PSByZXN1bHQ6ICR7cmVzdWx0fWApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGBGQUlMO3Rlc3RPbGRFbm91Z2ggZXhwZWN0ZWQ6ICR7ZXhwZWN0ZWR9ID09PSByZXN1bHQ6ICR7cmVzdWx0fWApO1xuICB9XG59XG50ZXN0RXhwZWN0KClcbnRlc3RPbGRFbm91Z2goKTtcbnRlc3RHZXREaWZmRGF5cygpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0geyB2YWxpZGF0ZUJpcnRoZGF5IH07XG4iLCJmdW5jdGlvbiB2YWxpZGF0ZU5hbWVzKG9iaikge1xuICBsZXQgeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH0gPSBvYmo7XG4gIGlmIChmaXJzdE5hbWUpIHtcbiAgICBpZiAobGFzdE5hbWUpIHtcbiAgICAgIHJldHVybiBcIkxhc3QgTmFtZSBhbmQgRmlyc3QgTmFtZSBDb21wbGV0ZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiTGFzdCBOYW1lIEVtcHRleVwiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJGaXJzdE5hbWUgRW1wdGV5XCI7XG4gIH1cbiAgLy8gZmlyc3ROYW1lXG4gIC8vICAgPyBsYXN0TmFtZVxuICAvLyAgICAgPyBjb25zb2xlLmxvZyhcIkxhc3QgTmFtZSBhbmQgRmlyc3QgTmFtZSBDb21wbGV0ZWRcIilcbiAgLy8gICAgIDogY29uc29sZS5sb2coXCJMYXN0IE5hbWUgRW1wdGV5XCIpXG4gIC8vICAgOiBjb25zb2xlLmxvZyhcIkZpcnN0TmFtZSBFbXB0ZXlcIik7XG59XG5cbmZ1bmN0aW9uIHRlc3R2YWxpZGF0ZU5hbWVzKCkge1xuICBsZXQgZmFpbE9iakZpcnN0TmFtZSA9IHtcbiAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgbGFzdE5hbWU6IFwibGFzdE5hbWVcIixcbiAgfTtcbiAgbGV0IGZhaWxPYmpMYXN0TmFtZSA9IHtcbiAgICBmaXJzdE5hbWU6IFwiZmlyc3ROYW1lXCIsXG4gICAgbGFzdE5hbWU6IFwiXCIsXG4gIH07XG4gIGxldCBzdWNjT2JqID0ge1xuICAgIGZpcnN0TmFtZTogXCJmaXJzdE5hbWVcIixcbiAgICBsYXN0TmFtZTogXCJsYXN0TmFtZVwiLFxuICB9O1xuICBjb25zdCBmYWlsT2JqRmlyc3ROYW1lRXhwZWN0ZWQgPSBcIkZpcnN0TmFtZSBFbXB0ZXlcIjtcbiAgY29uc3QgZmFpbE9iakxhc3ROYW1lRXhwZWN0ZWQgPSBcIkxhc3QgTmFtZSBFbXB0ZXlcIjtcbiAgY29uc3Qgc3VjY09iakV4cGVjdGVkID0gXCJMYXN0IE5hbWUgYW5kIEZpcnN0IE5hbWUgQ29tcGxldGVkXCI7XG5cbiAgY29uc3QgZmFpbE9iakZpcnN0TmFtZVJlc3VsdCA9IHZhbGlkYXRlTmFtZXMoZmFpbE9iakZpcnN0TmFtZSk7XG4gIGNvbnN0IGZhaWxPYmpMYXN0TmFtZVJlc3VsdCA9IHZhbGlkYXRlTmFtZXMoZmFpbE9iakxhc3ROYW1lKTtcbiAgY29uc3Qgc3VjY09ialJlc3VsdCA9IHZhbGlkYXRlTmFtZXMoc3VjY09iaik7XG5cbiAgaWYgKFxuICAgIGZhaWxPYmpGaXJzdE5hbWVSZXN1bHQgPT0gZmFpbE9iakZpcnN0TmFtZUV4cGVjdGVkICYmXG4gICAgZmFpbE9iakxhc3ROYW1lUmVzdWx0ID09IGZhaWxPYmpMYXN0TmFtZUV4cGVjdGVkICYmXG4gICAgc3VjY09iakV4cGVjdGVkID09IHN1Y2NPYmpSZXN1bHRcbiAgKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgU1VDQ0VTUzogdGVzdHZhbGlkYXRlTmFtZXM6IEV4cGVjdGVkIFZhbHVlczogJHtbXG4gICAgICAgIGZhaWxPYmpGaXJzdE5hbWVFeHBlY3RlZCxcbiAgICAgICAgZmFpbE9iakxhc3ROYW1lRXhwZWN0ZWQsXG4gICAgICAgIHN1Y2NPYmpFeHBlY3RlZCxcbiAgICAgIF19ID09PSBSZXN1bHQgJHtbXG4gICAgICAgIGZhaWxPYmpGaXJzdE5hbWVSZXN1bHQsXG4gICAgICAgIGZhaWxPYmpMYXN0TmFtZVJlc3VsdCxcbiAgICAgICAgc3VjY09iakV4cGVjdGVkLFxuICAgICAgXX1gXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImZhaWxcIik7XG4gIH1cbn1cbnRlc3R2YWxpZGF0ZU5hbWVzKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHsgdmFsaWRhdGVOYW1lcyB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL3BleGVscy1jaHJpc3RpbmEtbW9yaWxsby0xMTgxMzU1LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3BleGVscy1kYW4tY3Jpc3RpYW4tcGHMhmR1cmV0zKYtMTQ3NjMyMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wZXhlbHMtYW5kcmVhLXBpYWNxdWFkaW8tODQwOTk2LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4jZGFzaCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgbGVmdDogNzAlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgZm9udC1zaXplOiAwLjZyZW07XFxufVxcbiNkYXNoIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI2Rhc2ggaDEge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAwLjZyZW07XFxufVxcblxcbiNkYXNoIGRpdiBidXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcbiNzaWduVXAge1xcbiAgLyogdmlzaWJpbGl0eTogbm9uZTsgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdmlzaWJpbGl0eTogbm9uZTtcXG59XFxuI3NpZ25VcCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jc2lnblVwIGZvcm0gbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuI3NpZ25VcCBkaXYgYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxufVxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogNDV2aDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gU3R5bGluZyAqL1xcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5uYXYgZGl2Om50aC1jaGlsZCgxKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5uYXYgZGl2Om50aC1jaGlsZCgxKSBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbm5hdiBkaXY6bnRoLWNoaWxkKDEpICN0aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAxLjNyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG5uYXYgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubmF2IGRpdjpudGgtY2hpbGQoMikgaSB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxubmF2IGltZyB7XFxuICB3aWR0aDogNXJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjdyZW07XFxufVxcblxcbi8qIFNlY3Rpb247IFRpdGxlIG9mIHRoZSBwYWdlIFN0eWxpbmcgKi9cXG5tYWluIHNlY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogNnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGNvcm5zaWxrO1xcbn1cXG5tYWluIHNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiA0LjV2bWF4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxubWFpbiBzZWN0aW9uIGgxIHtcXG4gIGZvbnQtc2l6ZTogNXZtYXg7XFxufVxcbm1haW4gc2VjdGlvbiBwIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6IGNvcm5zaWxrO1xcbn1cXG5tYWluIHNlY3Rpb24gI2J0biB7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDJ2bWF4O1xcbiAgY29sb3I6IGNvcm5zaWxrO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbm1haW4gc2VjdGlvbiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgY29sb3I6IHJvc3licm93bjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGNvcm5zaWxrO1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBmb250LXNpemU6IDN2bWF4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTZWN0aW9uIE9uZSAqL1xcbiNzZWN0aW9uLW9uZSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuI3NlY3Rpb24tb25lICNzZWN0aW9uLW9uZS1tYWluIHtcXG4gIGhlaWdodDogNDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xcbn1cXG4jc2VjdGlvbi1vbmUgI3NlY3Rpb24tb25lLW1haW4gaDEge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jc2VjdGlvbi1vbmUgI3NlY3Rpb24tb25lLW1haW4gcCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1jaGlsZCgxKSB7XFxuICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi8qIHByb2plY3QgdGFicyAqL1xcblxcbi8qIFRhYiAxICovXFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDEpIGkge1xcbiAgbWFyZ2luLWxlZnQ6IDIuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgxKSBoMSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG59XFxuXFxuLyogVGFiIDIgKi9cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMikgaSB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMikgaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAxLjVyZW0gMi4zcmVtO1xcbn1cXG5cXG4vKiBUYWIgMyAqL1xcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDMpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbn1cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgzKSBpIHtcXG4gIG1hcmdpbi1sZWZ0OiA5cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDMpIGgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XFxufVxcblxcbi8qIFRhYiA0ICovXFxuXFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoNCkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDE1dmg7XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDQpIGkge1xcbiAgbWFyZ2luLWxlZnQ6IDdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDQpIGgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XFxufVxcblxcbiNmb290ZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuI2Zvb3RlciBkaXYge1xcbiAgd2lkdGg6IDUwdmg7XFxuICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cXG4jZm9vdGVyIGRpdiBoMSB7XFxuICBmb250LXNpemU6IDV2bWF4O1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcbiNmb290ZXIgcCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuI2Zvb3RlciBwOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuI2Zvb3RlciBwOm50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxufVxcbiNmb290ZXIgZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxlbW9uY2hpZmZvbjtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbiNmb290ZXIgZGl2IGJ1dHRvbiBpIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi8qIEZPUk0gKi9cXG5cXG4jc2hvdyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDcwJTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wdWJsaWMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtC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ZzogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuI2Rhc2gge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGxlZnQ6IDcwJTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG4jZGFzaCBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNkYXNoIGgxIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcbn1cXG5cXG4jZGFzaCBkaXYgYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG4jc2lnblVwIHtcXG4gIC8qIHZpc2liaWxpdHk6IG5vbmU7ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IG5vbmU7XFxufVxcbiNzaWduVXAgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3NpZ25VcCBmb3JtIGxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbiNzaWduVXAgZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbn1cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWcvcGV4ZWxzLWNocmlzdGluYS1tb3JpbGxvLTExODEzNTUuanBnXFxcIik7XFxuICBoZWlnaHQ6IDQ1dmg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4vKiBOYXZpZ2F0aW9uIFN0eWxpbmcgKi9cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTB2aDtcXG59XFxubmF2IGRpdjpudGgtY2hpbGQoMSkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxubmF2IGRpdjpudGgtY2hpbGQoMSkgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5uYXYgZGl2Om50aC1jaGlsZCgxKSAjdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMS4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxubmF2IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm5hdiBkaXY6bnRoLWNoaWxkKDIpIGkge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbm5hdiBpbWcge1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xcbn1cXG5cXG4vKiBTZWN0aW9uOyBUaXRsZSBvZiB0aGUgcGFnZSBTdHlsaW5nICovXFxubWFpbiBzZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDZyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBjb3Juc2lsaztcXG59XFxubWFpbiBzZWN0aW9uIGgyIHtcXG4gIGZvbnQtc2l6ZTogNC41dm1heDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbm1haW4gc2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDV2bWF4O1xcbn1cXG5tYWluIHNlY3Rpb24gcCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiBjb3Juc2lsaztcXG59XFxubWFpbiBzZWN0aW9uICNidG4ge1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAydm1heDtcXG4gIGNvbG9yOiBjb3Juc2lsaztcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5tYWluIHNlY3Rpb24gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIGNvbG9yOiByb3N5YnJvd247XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBjb3Juc2lsaztcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgZm9udC1zaXplOiAzdm1heDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU2VjdGlvbiBPbmUgKi9cXG4jc2VjdGlvbi1vbmUge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZy9wZXhlbHMtZGFuLWNyaXN0aWFuLXBhzIZkdXJldMymLTE0NzYzMjEuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG4jc2VjdGlvbi1vbmUgI3NlY3Rpb24tb25lLW1haW4ge1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxufVxcbiNzZWN0aW9uLW9uZSAjc2VjdGlvbi1vbmUtbWFpbiBoMSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNzZWN0aW9uLW9uZSAjc2VjdGlvbi1vbmUtbWFpbiBwIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuXFxuLyogcHJvamVjdCB0YWJzICovXFxuXFxuLyogVGFiIDEgKi9cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgxKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMSkgaSB7XFxuICBtYXJnaW4tbGVmdDogMi4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDEpIGgxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcbn1cXG5cXG4vKiBUYWIgMiAqL1xcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbn1cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgyKSBpIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSgyKSBoMSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDEuNXJlbSAyLjNyZW07XFxufVxcblxcbi8qIFRhYiAzICovXFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMykge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDE1dmg7XFxufVxcbiNzZWN0aW9uLW9uZSBkaXY6bnRoLW9mLXR5cGUoMikgZGl2Om50aC1vZi10eXBlKDMpIGkge1xcbiAgbWFyZ2luLWxlZnQ6IDlyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoMykgaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG59XFxuXFxuLyogVGFiIDQgKi9cXG5cXG4jc2VjdGlvbi1vbmUgZGl2Om50aC1vZi10eXBlKDIpIGRpdjpudGgtb2YtdHlwZSg0KSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoNCkgaSB7XFxuICBtYXJnaW4tbGVmdDogN3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuI3NlY3Rpb24tb25lIGRpdjpudGgtb2YtdHlwZSgyKSBkaXY6bnRoLW9mLXR5cGUoNCkgaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZy9wZXhlbHMtYW5kcmVhLXBpYWNxdWFkaW8tODQwOTk2LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcbiNmb290ZXIgZGl2IHtcXG4gIHdpZHRoOiA1MHZoO1xcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcXG59XFxuI2Zvb3RlciBkaXYgaDEge1xcbiAgZm9udC1zaXplOiA1dm1heDtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG4jZm9vdGVyIHAge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbiNmb290ZXIgcDpmaXJzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcbiNmb290ZXIgcDpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG4jZm9vdGVyIGRpdiBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsZW1vbmNoaWZmb247XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG4jZm9vdGVyIGRpdiBidXR0b24gaSB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4vKiBGT1JNICovXFxuXFxuI3Nob3cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA3MCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3B1YmxpYy9vdGhlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQ0FBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb3RoZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vdGhlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydGluZyBGaWxlc1xuY29uc3QgeyB2YWxpZGF0ZUlEIH0gPSByZXF1aXJlKFwiLi9WYWxpZGF0ZUlEXCIpO1xuY29uc3QgeyB2YWxpZGF0ZUJpcnRoZGF5IH0gPSByZXF1aXJlKFwiLi92YWxpZGF0ZUJpcnRoZGF5XCIpO1xuY29uc3QgeyB2YWxpZGF0ZU5hbWVzIH0gPSByZXF1aXJlKFwiLi92YWxpZGF0ZU5hbWVzXCIpO1xuXG5jb25zdCBvdGhlciA9IHJlcXVpcmUoJy4vb3RoZXIuanMnKVxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi9tYWluLmNzc1wiKTtcbmNvbnN0IHN0eWxldHdvID0gcmVxdWlyZSgnLi9vdGhlci5jc3MnKVxuLy8gRG9jdW1lbnRcbmNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG5jb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blwiKTtcbmxldCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uXCIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbmNvbnN0IHNpZ251cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwXCIpO1xuY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1idG5cIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5jb25zdCBmb3JtU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXN1Ym1pdC1idG5cIik7XG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IGRpdiBpXCIpO1xuY29uc3QgcHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzXCIpO1xuY29uc3QgZGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFzaFwiKTtcbmNvbnN0IGRhc2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhc2hCdXR0b25cIik7XG5jb25zdCBzaG93RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd1wiKTtcblxuLy8gUGxhY2luZyBJbWFnZVxuY29uc3QgaW1nbG9nID0gcmVxdWlyZShcIi4vaW1nL3BleGVscy1jb3R0b25icm8tNDU0MzEzOS5qcGdcIik7XG5pbWcuc3JjID0gYCR7aW1nbG9nfWA7XG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJlc3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkYXNoLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuZGFzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGRhc2guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbi8vZm9ybSBleGl0IGJ1dHRvblxuZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBzaWdudXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG59KTtcblxuLy9SZWdpc3RlciBidXR0b25cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzaWdudXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBzaWdudXAuc3R5bGUuekluZGV4ID0gMjtcbiAgc2lnbnVwLnN0eWxlLmJhY2tncm91bmQgPSBcImdyYXlcIjtcbiAgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xufSk7XG5cbi8vZm9ybSBzdWJtaXQgYnV0dG9uXG5mb3JtU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGEgPSB2YWxpZGF0ZUlEKGZvcm0udXNlcklELnZhbHVlKTtcbiAgY29uc3QgYiA9IHZhbGlkYXRlQmlydGhkYXkoZm9ybS5iaXJ0aGRheS52YWx1ZSk7XG4gIGNvbnN0IGMgPSB2YWxpZGF0ZU5hbWVzKHtcbiAgICBmaXJzdE5hbWU6IGZvcm0uZm5hbWUudmFsdWUsXG4gICAgbGFzdE5hbWU6IGZvcm0ubG5hbWUudmFsdWUsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhhLCBiLCBjKTtcbiAgY29uc3QgdGVtcCA9IGBcbiAgICAgICAgPGgxPiR7Zm9ybS5mbmFtZS52YWx1ZX0gJHtmb3JtLmxuYW1lLnZhbHVlfTwvaDE+XG4gICAgICAgIDxoMz5Zb3VyIEJpcnRoZGF5IGlzIG9uICR7Zm9ybS5iaXJ0aGRheS52YWx1ZX08L2gzPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxoND4ke2F9PC9oND5cbiAgICAgICAgPGg0PiR7Yn08L2g0PlxuICAgICAgICA8aDQ+JHtjfTwvaDQ+XG4gICAgYDtcbiAgc2hvd0RhdGEuaW5uZXJIVE1MICs9IHRlbXA7XG59KTtcbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUlEIiwidmFsIiwiY29udGFpbk9iaiIsImNvbnRhaW5zTG93ZXJjYXNlIiwiY29udGFpbnNOdW1iZXIiLCJjb250YWluc1VwcGVyQ2FzZSIsInZhbGlkT3JOb3QiLCJjb250YWlucyIsIlZhbGlkVXNlcklEQ2hlY2siLCJ2YWxpZGF0b3IiLCJvYmoiLCJsZW5ndGgiLCJ1cGRhdGVPYmpWYWx1ZSIsInVwZGF0ZU9iaiIsInRlc3RDb250YWlucyIsInRlc3RTdWNjZXNzT2JqIiwidGVzdEZhaWxWYWx1ZSIsImZhaWxFeHBlY3RlZCIsImZhaWxSZXN1bHQiLCJzdWNjZXNzUmVzdWx0Iiwic3VjZXNzUmVzdWx0VHlwZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwiY2hhckNvZGVBdCIsImhhc051bWJlciIsInRlc3RVcGRhdGVPYmoiLCJ0ZXN0T2JqIiwidmFsdWUiLCJleHBlY3RlZE9iaiIsInJlc3VsdCIsInN0ciIsInRlc3QiLCJ0ZXN0SGFzTnVtYmVyIiwiZXhwZWN0ZWQiLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhZGluZyIsImJvb2wiLCJwYWQiLCJsb29wIiwiaW5kZXgiLCJsZXR0ZXIiLCJjaGFyIiwiaW5uZXJIVE1MIiwicGFkU3RhcnQiLCJ0ZXN0TG9vcCIsImNoYXQiLCJ1bmRlZmluZWQiLCJ0ZXN0UGFkaW5nIiwidmFsaWRhdGVCaXJ0aGRheSIsImRpZmZEYXlzIiwiZ2V0RGlmZkRheXMiLCJvbGRFbm91Z2hWYWx1ZSIsIm9sZEVub3VnaCIsImRhdGUxIiwiRGF0ZSIsImRhdGUyIiwibm93IiwiZGlmZlRpbWUiLCJNYXRoIiwiY2VpbCIsInRlc3RHZXREaWZmRGF5cyIsImV4cGVjdCIsInNldEludGVydmFsIiwidGVzdEV4cGVjdCIsInRlc3RPbGRFbm91Z2giLCJ2YWxpZGF0ZU5hbWVzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ0ZXN0dmFsaWRhdGVOYW1lcyIsImZhaWxPYmpGaXJzdE5hbWUiLCJmYWlsT2JqTGFzdE5hbWUiLCJzdWNjT2JqIiwiZmFpbE9iakZpcnN0TmFtZUV4cGVjdGVkIiwiZmFpbE9iakxhc3ROYW1lRXhwZWN0ZWQiLCJzdWNjT2JqRXhwZWN0ZWQiLCJmYWlsT2JqRmlyc3ROYW1lUmVzdWx0IiwiZmFpbE9iakxhc3ROYW1lUmVzdWx0Iiwic3VjY09ialJlc3VsdCIsInJlcXVpcmUiLCJvdGhlciIsInN0eWxlIiwic3R5bGV0d28iLCJpbWciLCJnZXRFbGVtZW50QnlJZCIsIm5hdiIsImJ0biIsInNlY3Rpb24iLCJtYWluIiwic2lnbnVwIiwiZm9ybUJ0biIsImZvcm0iLCJmb3JtU3VibWl0QnRuIiwiaGFtYnVyZ2VyIiwicHJlc3MiLCJkYXNoIiwiZGFzaEJ1dHRvbiIsInNob3dEYXRhIiwiaW1nbG9nIiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXkiLCJlIiwicHJldmVudERlZmF1bHQiLCJvdmVyZmxvd1kiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwiYSIsInVzZXJJRCIsImIiLCJiaXJ0aGRheSIsImMiLCJmbmFtZSIsImxuYW1lIiwidGVtcCJdLCJzb3VyY2VSb290IjoiIn0=