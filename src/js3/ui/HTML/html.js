import { loginFormHTML } from "./loginPage";

export const arcaneHTML = {
  init() {
    document.body.insertAdjacentHTML("beforeend", loginFormHTML);
  },
};
