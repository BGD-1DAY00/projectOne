
const body = document.querySelector("body");

function pading(bool = false) {
  if (bool) {
    let letter = "x";
    let index;
    function pad() {
      loop(index, letter, true);
    }
    return pad();
  } else {
    return -1;
  }
}
pading(true);

function loop(index, char, bool) {
  if(bool){
    for (index = 0; index < 21; index++) {
      body.innerHTML += `${char.padStart(index, char)} <br>`;
    }
  }
}

function testLoop() {
  //should not return anything, expecet undeined
  let index;
  let chat = "x";
  let result = loop(index, chat);
  if (result === undefined) {
    console.log(`testLOOP; Success: ${result} === ${undefined}`);
  } else {
    console.log(`testLoop: fail; ${result} !== ${undefined}`);
  }
}
function testPading() {
  const result = pading();
  if (result === -1) {
    console.log("testPading: Success");
  } else {
    console.log(`testPading: Fail ${result}`);
  }
}

testLoop();
testPading();
