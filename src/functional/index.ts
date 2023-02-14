const REQUIRED: string = "REQUIRED";
const MIN_LENGTH: string = "MIN_LENGTH";
function validate(
  value: string,
  flag: string,
  validatorValue: string | number
) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > +validatorValue;
  }
}

function createUser(uName: string, uPass: string) {
  if (!validate(uName, REQUIRED, 0) || !validate(uPass, MIN_LENGTH, 5)) {
    throw new Error(
      "Invalid Input - username and password is wrong (password should be atleast 6 chars long & username should be atleast 3 chars long"
    );
  }
  return {
    userName: uName,
    userPassword: uPass,
  };
}
type Person = {
  userName: string;
  userPassword: string;
};
function loggerFunctional({ userName, userPassword }: Person) {
  const el = document.createElement("div");
  el.textContent = `New User crated by the name of - ${userPassword.toUpperCase()}`;
  el.style.color = "red";
  el.style.padding = "0px 3rem";
  document.body.appendChild(el);
}

function getUserInput(inputElId: string) {
  return document.getElementById(inputElId) as HTMLInputElement;
}

function submitHandler(event: Event) {
  event.preventDefault();
  const enteredUsername = getUserInput("username").value;
  const enteredPassword = getUserInput("password").value;
  try {
    const newUser = createUser(enteredUsername, enteredPassword);
    loggerFunctional(newUser);
    getUserInput("username").value = "";
    getUserInput("password").value = "";
    console.log("new-user", newUser);
  } catch (error: any) {
    alert(error.message);
    getUserInput("username").value = "";
    getUserInput("password").value = "";
  }
}

function formInput(formId: string, formSubmitHandler: (event: Event) => void) {
  const form = document.getElementById(formId);
  form?.addEventListener("submit", formSubmitHandler);
}

formInput("user-input", submitHandler);
