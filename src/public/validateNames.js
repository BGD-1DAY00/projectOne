function validateNames(obj) {
  let { firstName, lastName } = obj;
  if (firstName) {
    if (lastName) {
      return "Last Name and First Name Completed";
    } else {
      return "Last Name Emptey";
    }
  } else {
    return "FirstName Emptey";
  }
  // firstName
  //   ? lastName
  //     ? console.log("Last Name and First Name Completed")
  //     : console.log("Last Name Emptey")
  //   : console.log("FirstName Emptey");
}

function testvalidateNames() {
  let failObjFirstName = {
    firstName: "",
    lastName: "lastName",
  };
  let failObjLastName = {
    firstName: "firstName",
    lastName: "",
  };
  let succObj = {
    firstName: "firstName",
    lastName: "lastName",
  };
  const failObjFirstNameExpected = "FirstName Emptey";
  const failObjLastNameExpected = "Last Name Emptey";
  const succObjExpected = "Last Name and First Name Completed";

  const failObjFirstNameResult = validateNames(failObjFirstName);
  const failObjLastNameResult = validateNames(failObjLastName);
  const succObjResult = validateNames(succObj);

  if (
    failObjFirstNameResult == failObjFirstNameExpected &&
    failObjLastNameResult == failObjLastNameExpected &&
    succObjExpected == succObjResult
  ) {
    console.log(
      `SUCCESS: testvalidateNames: Expected Values: ${[
        failObjFirstNameExpected,
        failObjLastNameExpected,
        succObjExpected,
      ]} === Result ${[
        failObjFirstNameResult,
        failObjLastNameResult,
        succObjExpected,
      ]}`
    );
  } else {
    console.log("fail");
  }
}
testvalidateNames();
module.exports = { validateNames };
