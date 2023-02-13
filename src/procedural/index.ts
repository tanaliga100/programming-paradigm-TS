const form = document.getElementById("user-input")! as HTMLFormElement;
form.addEventListener("submit", function submitHandler(event: Event) {
  event.preventDefault();
  const iName = document.getElementById("username")! as HTMLInputElement;
  const enteredUsername = iName.value;
  const iPassword = document.getElementById("password")! as HTMLInputElement;
  const enteredPassword = iPassword.value;

  // validation
  const validateName = enteredUsername.trim().length < 3;
  const validatePass = enteredPassword.trim().length < 5;

  if (validateName) {
    alert("Please enter a valid name - Must greater than 3 characters long");
    return;
  }

  if (validatePass) {
    alert(
      "Please enter a valid passowrd - Must greater than 6 characters long"
    );
    return;
  }
  // reset input fields
  iName.value = "";
  iPassword.value = "";

  const values = {
    enteredUsername: enteredUsername,
    enteredPassword: enteredPassword,
    others: "adaad",
  };
  logger(values);
});

function logger<T extends { enteredUsername: string; enteredPassword: string }>(
  args: T
) {
  // values
  const placeholder = document.createElement("div");
  placeholder.innerHTML = "USERNAME";
  const val = document.createElement("h3");
  val.textContent = JSON.stringify(args.enteredUsername);
  document.body.append(placeholder);
  document.body.append(val);
}
