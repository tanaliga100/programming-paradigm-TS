"use strict";
var form = document.getElementById("user-input");
form.addEventListener("submit", function submitHandler(event) {
    event.preventDefault();
    var iName = document.getElementById("username");
    var enteredUsername = iName.value;
    var iPassword = document.getElementById("password");
    var enteredPassword = iPassword.value;
    // validation
    var validateName = enteredUsername.trim().length < 3;
    var validatePass = enteredPassword.trim().length < 5;
    if (validateName) {
        alert("Please enter a valid name - Must greater than 3 characters long");
        return;
    }
    if (validatePass) {
        alert("Please enter a valid passowrd - Must greater than 6 characters long");
        return;
    }
    // reset input fields
    iName.value = "";
    iPassword.value = "";
    var values = {
        enteredUsername: enteredUsername,
        enteredPassword: enteredPassword,
        others: "adaad",
    };
    logger(values);
});
function logger(args) {
    // values
    var placeholder = document.createElement("div");
    placeholder.innerHTML = "USERNAME";
    var val = document.createElement("h3");
    val.textContent = JSON.stringify(args.enteredUsername);
    document.body.append(placeholder);
    document.body.append(val);
}
