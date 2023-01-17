document
  .querySelector("#make_user_submitted")
  .addEventListener("click", () => this.makeUser());

document.querySelector(".submit_btn").addEventListener("click", () => {
  //todo
});

document
  .querySelector(".sign_up_text")
  .addEventListener("click", () => modal.showModal(".sign_up_modal"));

function loginError() {
  document.querySelector(
    "#email_input",
    "#password_input",
    ".submit_btn"
  ).style.animation = "inputError 1s 5";
  document.querySelector(".login_form_wrapper");
}
function login() {
  const email = document.querySelector("#email_input");
  const password = document.querySelector("#password_input");

  if (!email || !password) {
    this.loginError();
  }

  console.log(email, password);

  document.querySelector("#login_form").addEventListener("submit", (e) => {
    login();
  });

  console.log("attempting to login");

  //if (info is valid)
  onLoggedIn();
}
function onLoggedIn() {
  const loginScreen = document.querySelector("#login");
  const chatScreen = document.querySelector("#chat");

  loginScreen.style.display = "none";
  chatScreen.style.display = "flex";
}
function makeUser() {
  const authEmail = document.querySelector("#email_signup").value;
  const authPassword = document.querySelector("#password_signup").value;

  // Tries to create a new acc | Errors when already in use.
  auth
    .createUserWithEmailAndPassword(authEmail, authPassword)
    .then((e) => e)
    .catch((err) => {
      modal.printError(".sign_up_modal", err);
    });
}
