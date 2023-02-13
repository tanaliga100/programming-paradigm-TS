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

class Validator {}
class User {}
class UserInputForm {}

class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    console.log(`${this.client} owes $${this.amount} for ${this.details}`);
  }
}
const f = new Invoice("lara", "owes", 31232);
const g = new Invoice("dan", "borrowed", 123.99);
const h = new Invoice("kimmy", "steals a bag worth", 123.99);

const invoices: Invoice[] = [];
invoices.push(f);
invoices.push(g);
invoices.push(h);

console.log(invoices);
