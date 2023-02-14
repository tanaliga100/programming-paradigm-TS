"use strict";
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.validate = function (value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > validatorValue;
        }
        if (flag === this.MIN_LENGTH) {
            return value.trim().length > validatorValue;
        }
    };
    Validator.REQUIRED = "REQUIRED";
    Validator.MIN_LENGTH = "MIN_LENGTH";
    return Validator;
}());
var User = /** @class */ (function () {
    function User(uName, uPass, msg) {
        this.username = uName;
        this.password = uPass;
        this.msg = "HI I Am";
    }
    User.prototype.logger = function () {
        var el = document.createElement("div");
        el.innerHTML = this.username + " - is the new user-created !!!";
        el.style.padding = "1rem";
        document.body.appendChild(el);
        console.log(this.msg + " .... " + this.username);
    };
    return User;
}());
var UserInputForm = /** @class */ (function () {
    function UserInputForm() {
        this.iForm = document.getElementById("user-input");
        this.iName = document.getElementById("username");
        this.iPass = document.getElementById("password");
        this.iForm.addEventListener("submit", this.submitHandler.bind(this));
    }
    // methods
    UserInputForm.prototype.submitHandler = function (event) {
        event.preventDefault();
        var enteredUserName = this.iName.value;
        var enteredPass = this.iPass.value;
        if (!Validator.validate(enteredUserName, Validator.REQUIRED, 3 || !Validator.validate(enteredPass, Validator.MIN_LENGTH, 5))) {
            alert("Invalid Input - username and password is wrong (password should be atleast 6 chars long & username should be atleast 3 chars long");
            this.iName.value = "";
            this.iPass.value = "";
            return;
        }
        var newUser = new User(enteredUserName, enteredPass);
        console.log(newUser);
        newUser.logger();
        this.iName.value = "";
        this.iPass.value = "";
    };
    return UserInputForm;
}());
new UserInputForm();
