// get the dom elements

const form = document.getElementById("user-input");
const iName = document.getElementById("username");
const iPassword = document.getElementById("password");
const iButton = document.querySelector("button");

function formHandler(event) {
  event.preventDefault();
  const enteredName = iName.value;
  const enteredPassword = iPassword.value;
  // validate here ...
  if (!enteredName || !enteredPassword) {
    showModal({ empty: "All fields must not be empty" });
    return;
  }
  if (enteredName.trim().length < 3) {
    showModal({ username: "USERNAME...Must not be less than 3 characters" });
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    showModal({ password: "PASSWORD...too weak.. Make it long" });
    return;
  }
  iName.value = "";
  iPassword.value = "";
  const values = {
    enteredName,
    enteredPassword,
  };
  console.log("values", values);
  showModal({ USER: `NEW_USER = ${values.enteredName}` });
}

form.addEventListener("submit", formHandler);

function showModal(text) {
  const { empty, username, password, USER } = text;

  // Create the modal element
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.right = "0";
  modal.style.bottom = "0";
  modal.style.left = "0";
  modal.style.backgroundColor = "rgba(0,0,0,0.5)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  // Create the content container
  var content = document.createElement("div");
  content.style.backgroundColor = "white";
  content.style.padding = "2em";
  content.style.borderRadius = "5px";
  content.style.background = "lightgray";
  content.style.display = "grid";
  content.style.alignItems = "center";
  content.style.justifyContent = "center";
  content.style.color = "red";

  content.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  content.innerHTML = empty || username || password || USER;
  // Create the close button
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;";
  closeButton.style.position = "absolute";
  closeButton.style.top = "0";
  closeButton.style.right = "0";
  closeButton.style.fontSize = "1.5em";
  closeButton.style.backgroundColor = "transparent";
  closeButton.style.border = "none";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", function () {
    document.body.removeChild(modal);
  });

  // Append the close button to the content container
  content.appendChild(closeButton);

  // Append the content container to the modal

  modal.appendChild(content);

  // Append the modal to the document
  document.body.appendChild(modal);
}
