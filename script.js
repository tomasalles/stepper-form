const stepOneBtnContinue = document.getElementById("stepOneBtnContinue");
const stepTwoBtnContinue = document.getElementById("stepTwoBtnContinue");
const stepTwoBtnBack = document.getElementById("stepTwoBtnBack");
const validadeBtnBack = document.getElementById("validateBtnBack");
const stepOneDiv = document.getElementById("stepOne");
const stepTwoDiv = document.getElementById("stepTwo");
const stepThreeDiv = document.getElementById("stepThree");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const okP = document.getElementById("okP");
const notOkP = document.getElementById("notOkP");
const notOkPPasswordAndEmail = document.getElementById(
  "notOkPPasswordAndEmail"
);
const notOkPPassword = document.getElementById("notOkPPassword");
const notOkPEmail = document.getElementById("notOkPEmail");

stepOneBtnContinue.addEventListener("click", stepOneContinue);
stepTwoBtnContinue.addEventListener("click", stepTwoContinue);
stepTwoBtnBack.addEventListener("click", stepTwoBack);
validateBtnBack.addEventListener("click", validadeBack);

let email;
let password;

function stepOneContinue(e) {
  e.preventDefault();
  email = emailInput.value;
  stepOneDiv.classList.toggle("hide");
  stepTwoDiv.classList.toggle("hide");
}

function stepTwoContinue(e) {
  e.preventDefault();
  password = passwordInput.value;
  stepTwoDiv.classList.toggle("hide");
  stepThreeDiv.classList.toggle("hide");
  validade(email, password);
}

function stepTwoBack(e) {
  e.preventDefault();
  stepOneDiv.classList.toggle("hide");
  stepTwoDiv.classList.toggle("hide");
}

function validadeBack(e) {
  e.preventDefault();
  validateBackClassToggles();
}

function validade(email, password) {
  if (password.length > 8 && email.length > 16) {
    okP.classList.remove("hide");
    submit(email, password);
  } else if (email.length <= 16 && password.length <= 8) {
    notOkPPasswordAndEmail.classList.remove("hide");
    validateNotOkClassToggles();
  } else if (password.length <= 8) {
    notOkPPassword.classList.remove("hide");
    validateNotOkClassToggles();
  } else if (email.length <= 16) {
    notOkPEmail.classList.remove("hide");
    validateNotOkClassToggles();
  }
}

function submit(email, password) {
  console.log(`do stuff with ${email} and ${password}`);
}

function validateNotOkClassToggles() {
  notOkP.classList.remove("hide");
  validateBtnBack.classList.remove("hide");
}

function validateBackClassToggles() {
  stepTwoDiv.classList.toggle("hide");
  stepThreeDiv.classList.toggle("hide");
  notOkP.classList.add("hide");
  validateBtnBack.classList.add("hide");
  notOkPPasswordAndEmail.classList.add("hide");
  notOkPPassword.classList.add("hide");
  notOkPEmail.classList.add("hide");
}
