hideModal();

function toggleModal() {
  // Select modal and add class / style it here
}

function hideModal() {
  document.querySelector(".modal_bg").addEventListener("click", () => {
    document
      .querySelectorAll(".all_modal")
      .forEach((e) => (e.style.display = "none"));
    document.querySelector(".modal_bg").style.display = "none";
  });
}

export function showModal(modal) {
  console.log("hijhiji");
  document.querySelector(modal).style.display = "flex";
  document.querySelector(`.modal_bg`).style.display = "block";
}

function printError(modal, error) {
  const selectedModal = document.querySelector(modal);
  selectedModal.querySelector(".modal_error").textContent = error;
}
