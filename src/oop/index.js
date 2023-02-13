// // USING OBJECT ORIENTED MANNER
// class Validator {
//   static REQUIRED = "REQUIRED";
//   static MIN_LENGTH = "MIN_LENGTH";

//   static validate(value, flag, validatorValue) {
//     if (flag === this.REQUIRED) {
//       return value.trim().length > 0;
//     }
//     if (flag === this.MIN_LENGTH) {
//       return value.trim().length > validatorValue;
//     }
//   }
// }

// class User {
//   constructor(uName, uPass) {
//     this.userName = uName;
//     this.userPass = uPass;
//   }
//   greet() {
//     console.log(`Hi I Am, ${this.userName}`);
//   }
// }

// class UserInputForm {
//   constructor() {
//     this.form = document.getElementById("user-input");
//     this.userNameInput = document.getElementById("username");
//     this.passwordInput = document.getElementById("password");
//     this.form.addEventListener("submit", this.submitHandler.bind(this));
//   }
//   // methords
//   submitHandler(event) {
//     event.preventDefault();
//     const enteredUsername = this.userNameInput.value;
//     const enteredPassword = this.passwordInput.value;
//     if (
//       !Validator.validate(enteredUsername, Validator.REQUIRED) ||
//       !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
//     ) {
//       alert(
//         "Invalid Input - username and password (password should be at least 6 chars long"
//       );
//       return;
//     }
//     const newUser = new User(enteredUsername, enteredPassword);
//     console.log(newUser);
//     newUser.greet();
//   }
// }

// new UserInputForm();
