"use strict";
// console.log("functional");
// const REQUIRED = "REQUIRED";
// const MIN_LENGTH = "MIN_LENGTH";
// // a validator
// function Validator(value, flag, validatorValue) {
//   if (flag === REQUIRED) {
//     return value.trim().length > 0;
//   }
//   if (flag === MIN_LENGTH) {
//     return value.trim().length > validatorValue;
//   }
// }
// // an instance of a form
// function connectForm(formId, formSubmitHandler) {
//   const form = document.getElementById(formId);
//   form.addEventListener("submit", formSubmitHandler);
// }
// connectForm("user-input", submitHandler);
// // an instance of an element
// function getUserInput(inputElId) {
//   return document.getElementById(inputElId).value;
// }
// // run validation here..
// function createUser(userName, userPassword) {
//   if (
//     !Validator(userName, REQUIRED) ||
//     !Validator(userPassword, MIN_LENGTH, 5)
//   ) {
//     throw new Error("Invalid input - Password must be at least 5 characters");
//   }
//   return {
//     userName: userName,
//     userPassword: userPassword,
//   };
// }
// // submit handler
// function submitHandler(event) {
//   event.preventDefault();
//   const userInput = getUserInput("username");
//   const passInput = getUserInput("password");
//   try {
//     const newUser = createUser(userInput, passInput);
//     console.log(newUser);
//     greetUSer(newUser);
//   } catch (error) {
//     alert(error.message);
//   }
// }
// // greet user function
// function greetUSer(user) {
//   console.log(`Hi I Am, ${user.userInput}`);
// }
var REQUIRED = "REQUIRED";
var MIN_LENGTH = "MIN_LENGTH";
function validate(value, flag, validatorValue) {
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }
    if (flag === MIN_LENGTH) {
        return value.trim().length > +validatorValue;
    }
}
function createUser(uName, uPass) {
    if (!validate(uName, REQUIRED, 0) || !validate(uPass, MIN_LENGTH, 5)) {
        throw new Error("Invalid Input - username and password is wrong (password should be atleast 6 chars long & username should be atleast 3 chars long");
    }
    return {
        userName: uName,
        userPassword: uPass,
    };
}
function loggerFunctional(_a) {
    var userName = _a.userName, userPassword = _a.userPassword;
    var el = document.createElement("div");
    el.textContent = "New User crated by the name of - " + userPassword.toUpperCase();
    el.style.color = "red";
    el.style.padding = "0px 3rem";
    document.body.appendChild(el);
}
function getUserInput(inputElId) {
    return document.getElementById(inputElId);
}
function submitHandler(event) {
    event.preventDefault();
    var enteredUsername = getUserInput("username").value;
    var enteredPassword = getUserInput("password").value;
    try {
        var newUser = createUser(enteredUsername, enteredPassword);
        loggerFunctional(newUser);
        getUserInput("username").value = "";
        getUserInput("password").value = "";
        console.log("new-user", newUser);
    }
    catch (error) {
        alert(error.message);
        getUserInput("username").value = "";
        getUserInput("password").value = "";
    }
}
function formInput(formId, formSubmitHandler) {
    var form = document.getElementById(formId);
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", formSubmitHandler);
}
formInput("user-input", submitHandler);
