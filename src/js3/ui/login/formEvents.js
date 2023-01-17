import { showModal } from "../modal";
export const addFormEvents = () => {
  document
    .querySelector(".sign_up_text")
    .addEventListener("click", () => showModal(".sign_up_modal"));
};
