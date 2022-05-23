function validateBirthday(val) {
  const diffDays = getDiffDays(val);
  const oldEnoughValue = oldEnough(diffDays);
  return oldEnoughValue;
}

function getDiffDays(val) {
  const date1 = new Date(val);
  const date2 = new Date(Date.now());
  const diffTime = date2 - date1;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
function testGetDiffDays() {
  const expected = expect(11);
  const value = "5/07/2022";
  const result = getDiffDays(value);

  if (result === expected) {
    console.log(`SUCCSS; testValidateBirthday: ${expected} === ${result}`);
  } else {
    console.log(`FAIL; testValidateBirthday: ${expected} === ${result}`);
  }
}
function expect(val){
  setInterval(()=>{
    val++
  }, 86400000)
  return val
}
function testExpect(){
  const expected = 11
  const val = 11
  const result = expect(val)
  console.log(`testExpect ${result} ;; ${expected}`)
}


function oldEnough(diffDays) {
  if (diffDays > 6570) {
    return diffDays;
  } else {
    return `You are too Young, Go Outside!`;
  }
}
function testOldEnough() {
  const expected = `You are too Young, Go Outside!`;
  const value = 6569;
  const result = oldEnough(value);

  if (result === expected) {
    console.log(`SUCCSS;testOldEnough expected: ${expected} === result: ${result}`);
  } else {
    console.log(`FAIL;testOldEnough expected: ${expected} === result: ${result}`);
  }
}
testExpect()
testOldEnough();
testGetDiffDays();


module.exports = { validateBirthday };
