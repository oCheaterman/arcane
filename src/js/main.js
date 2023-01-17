import "../sass/style.scss";
import HTML from "./html/HTML";
import addLoginFormEvents from "./login/formEvents";

let state = "login";

const showLoginForm = () => {
  document.body.insertAdjacentHTML("beforeend", HTML.loginFormHTML);
  addLoginFormEvents();
};

const showChat = () => {
  document.body.insertAdjacentHTML("beforeend", HTML.chatHTML);
};

const updateState = () => {
  switch (state) {
    case "login":
      showLoginForm();
      break;
    case "chat":
      showChat();
      break;
    default:
      break;
  }
};

updateState();
