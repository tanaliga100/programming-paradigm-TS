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

class Validator {
  static REQUIRED: any = "REQUIRED";
  static MIN_LENGTH: any = "MIN_LENGTH";
  static validate(value: string, flag: string, validatorValue: number) {
    if (flag === this.REQUIRED) {
      return value.trim().length > validatorValue;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}
class User {
  username: string;
  password: string | number;
  readonly msg: string | undefined;
  constructor(uName: string, uPass: string | number, msg?: string | undefined) {
    this.username = uName;
    this.password = uPass;
    this.msg = `HI I Am`;
  }
  logger() {
    const el = document.createElement("div")!;
    el.innerHTML = `${this.username} - is the new user-created !!!`;
    el.style.padding = "1rem";
    document.body.appendChild(el);
    console.log(`${this.msg} .... ${this.username}`);
  }
}
class UserInputForm {
  iForm: HTMLFormElement;
  iName: HTMLInputElement;
  iPass: HTMLInputElement;

  constructor() {
    this.iForm = document.getElementById("user-input")! as HTMLFormElement;
    this.iName = document.getElementById("username")! as HTMLInputElement;
    this.iPass = document.getElementById("password")! as HTMLInputElement;
    this.iForm.addEventListener("submit", this.submitHandler.bind(this));
  }
  // methods
  submitHandler(event: Event) {
    event.preventDefault();

    const enteredUserName = this.iName.value;
    const enteredPass = this.iPass.value;

    if (
      !Validator.validate(
        enteredUserName,
        Validator.REQUIRED,
        3 || !Validator.validate(enteredPass, Validator.MIN_LENGTH, 5)
      )
    ) {
      alert(
        "Invalid Input - username and password is wrong (password should be atleast 6 chars long & username should be atleast 3 chars long"
      );
      this.iName.value = "";
      this.iPass.value = "";
      return;
    }
    const newUser = new User(enteredUserName, enteredPass);
    console.log(newUser);
    newUser.logger();
    this.iName.value = "";
    this.iPass.value = "";
  }
}
new UserInputForm();
