// Importing Files
const { validateID } = require("./ValidateID");
const { validateBirthday } = require("./validateBirthday");
const { validateNames } = require("./validateNames");

const other = require('./other.js')
const style = require("./main.css");
const styletwo = require('./other.css')
// Document
const img = document.getElementById("img");
const nav = document.getElementById("nav");
const btn = document.getElementById("btn");
let section = document.querySelector(".section");
const main = document.getElementById("main");
const signup = document.getElementById("signUp");
const formBtn = document.getElementById("form-btn");
const body = document.querySelector("body");
const form = document.querySelector("form");
const formSubmitBtn = document.getElementById("form-submit-btn");
const hamburger = document.querySelector("nav div i");
const press = document.getElementById("press");
const dash = document.getElementById("dash");
const dashButton = document.getElementById("dashButton");
const showData = document.getElementById("show");

// Placing Image
const imglog = require("./img/pexels-cottonbro-4543139.jpg");
img.src = `${imglog}`;

// Event Listeners

hamburger.addEventListener("click", () => {
  press.style.display = "none";
  dash.style.display = "flex";
});
dashButton.addEventListener("click", () => {
  press.style.display = "flex";
  dash.style.display = "none";
});

//form exit button
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signup.style.display = "none";
  body.style.overflowY = "scroll";
});

//Register button
btn.addEventListener("click", () => {
  signup.style.display = "flex";
  signup.style.zIndex = 2;
  signup.style.background = "gray";
  body.style.overflowY = "hidden";
});

//form submit button
formSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const a = validateID(form.userID.value);
  const b = validateBirthday(form.birthday.value);
  const c = validateNames({
    firstName: form.fname.value,
    lastName: form.lname.value,
  });
  console.log(a, b, c);
  const temp = `
        <h1>${form.fname.value} ${form.lname.value}</h1>
        <h3>Your Birthday is on ${form.birthday.value}</h3>
        <br>
        <h4>${a}</h4>
        <h4>${b}</h4>
        <h4>${c}</h4>
    `;
  showData.innerHTML += temp;
});
