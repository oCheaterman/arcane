export const user = {
  UID: "",
};

const arcaneFirebaseConfig = {
  apiKey: "AIzaSyAriYzDoI2QSvgpExCB3KVzw-YdWaNxPPU",
  authDomain: "arcane-24cff.firebaseapp.com",
  databaseURL: "https://arcane-24cff-default-rtdb.firebaseio.com",
  projectId: "arcane-24cff",
  storageBucket: "arcane-24cff.appspot.com",
  messagingSenderId: "662152855571",
  appId: "1:662152855571:web:b4b7f1505d3cbc652dffe6",
};

const app = firebase.initializeApp(arcaneFirebaseConfig);
const auth = firebase.auth(app);

const login = {
  init() {
    document
      .querySelector("#make_user_submitted")
      .addEventListener("click", () => this.makeUser());
    document.querySelector(".submit_btn").addEventListener("click", () => {});
    document
      .querySelector(".sign_up_text")
      .addEventListener("click", () => modal.showModal(".sign_up_modal"));
  },
  loginError() {
    document.querySelector(
      "#email_input",
      "#password_input",
      ".submit_btn"
    ).style.animation = "inputError 1s 5";
    document.querySelector(".login_form_wrapper");
  },
  login() {
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
  },
  onLoggedIn() {
    const loginScreen = document.querySelector("#login");
    const chatScreen = document.querySelector("#chat");

    loginScreen.style.display = "none";
    chatScreen.style.display = "flex";
  },
  makeUser() {
    const authEmail = document.querySelector("#email_signup").value;
    const authPassword = document.querySelector("#password_signup").value;

    // Tries to create a new acc | Errors when already in use.
    auth
      .createUserWithEmailAndPassword(authEmail, authPassword)
      .then((e) => e)
      .catch((err) => {
        modal.printError(".sign_up_modal", err);
      });
  },
};

login.init();

// makeUser()
// function makeUser(){
//   auth().createUserWithEmailAndPassword('poop@gmail.com', 'cubbydog1');
//   console.log(auth())
//   console.log("makeUser Worked");
// };
