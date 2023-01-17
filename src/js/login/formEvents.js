import { showModal } from "../html/modal";

export default function loginFormEvents() {
  const signupButton = document.querySelector(".sign_up_text");

  signupButton.addEventListener("click", () => {
    console.log("CLICKED >JS");
    showModal(".sign_up_modal");
  });
}
