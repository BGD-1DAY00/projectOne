function validateID(val) {
  let containObj = {
    containsLowercase: false,
    containsNumber: false,
    containsUpperCase: false,
  };

  const validOrNot = contains(containObj, val);
  const ValidUserIDCheck = validator(validOrNot);
  return ValidUserIDCheck;
  // Ask about returns in ternery operators
  // containsLowercase ? console.log("lower") : console.log("fail");
  // containsUpperCase ? console.log("upper") : console.log("fail");
  // containsNumber ? console.log("number") : console.log("fail");
}

function validator(obj) {
  const { containsLowercase, containsNumber, containsUpperCase } = obj;
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
    const updateObjValue = updateObj(obj, val);
    return updateObjValue;
  } else {
    return "ID is not long enough";
  }
}
function testContains() {
  let testSuccessObj = {
    containsNumber: false,
    containsLowercase: false,
    containsUpperCase: false,
  };
  const testFailValue = "sfjd33";
  const failExpected = "ID is not long enough";
  const failResult = contains(testSuccessObj, testFailValue);

  const successResult = contains(testSuccessObj, "ksfjlSF343");
  const sucessResultType = typeof successResult;

  if (sucessResultType === "object" && failResult === failExpected) {
    console.log(
      `testContains: Success; expected: ${sucessResultType} === object and expected: ${failResult} === ${failExpected}`
    );
  } else {
    console.log(`testContains: FAIL ${sucessResultType}`);
  }
}
testContains();

function updateObj(obj, val) {
  for (let i = 0; i < val.length; i++) {
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
  let testObj = {
    containsNumber: false,
    containsLowercase: false,
    containsUpperCase: false,
  };
  const value = "asfd123@Ssdf";
  const expectedObj = {
    containsNumber: true,
    containsLowercase: true,
    containsUpperCase: true,
  };
  const result = updateObj(testObj, value);
  if (
    result.containsNumber === expectedObj.containsNumber &&
    result.containsLowercase === expectedObj.containsLowercase &&
    result.containsUpperCase === expectedObj.containsUpperCase
  ) {
    console.log(
      `testUpdateObj: Success; Expected: ${
        (testObj.containsNumber,
        testObj.containsLowercase,
        testObj.containsUpperCase)
      } and  Result ${
        (result.containsNumber,
        result.containsLowercase,
        result.containsUpperCase)
      }`
    );
  } else {
    console.log(
      `testUpdateObj: Failure; Expected: ${
        (testObj.containsNumber,
        testObj.containsLowercase,
        testObj.containsUpperCase)
      } and  Result ${
        (result.containsNumber,
        result.containsLowercase,
        result.containsUpperCase)
      }`
    );
  }
}

function hasNumber(str) {
  return /\d/.test(str);
}

function testHasNumber() {
  const expected = true;
  const string = "anackl#@#=3";
  const result = hasNumber(string);

  result === expected
    ? console.log(`hasNumber function: success; ${expected} === ${result}`)
    : console.log("hasNumber function: FAILED");
}
testHasNumber();
testUpdateObj();

module.exports = { validateID };
