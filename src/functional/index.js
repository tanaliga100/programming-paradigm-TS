console.log("functional");

const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";

// a validator
function Validator(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

// an instance of a form
function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", formSubmitHandler);
}
connectForm("user-input", submitHandler);

// an instance of an element
function getUserInput(inputElId) {
  return document.getElementById(inputElId).value;
}

// run validation here..

function createUser(userName, userPassword) {
  if (
    !Validator(userName, REQUIRED) ||
    !Validator(userPassword, MIN_LENGTH, 5)
  ) {
    throw new Error("Invalid input - Password must be at least 5 characters");
  }
  return {
    userName: userName,
    userPassword: userPassword,
  };
}
// submit handler
function submitHandler(event) {
  event.preventDefault();
  const userInput = getUserInput("username");
  const passInput = getUserInput("password");
  try {
    const newUser = createUser(userInput, passInput);
    console.log(newUser);
    greetUSer(newUser);
  } catch (error) {
    alert(error.message);
  }
}

// greet user function
function greetUSer(user) {
  console.log(`Hi I Am, ${user.userInput}`);
}
