const modal = {
  init() {
    this.hideModal();
  },
  toggleModal() {
    // Select modal and add class / style it here
  },
  hideModal() {
    document.querySelector(".modal_bg").addEventListener("click", () => {
      document
        .querySelectorAll(".all_modal")
        .forEach((e) => (e.style.display = "none"));
      document.querySelector(".modal_bg").style.display = "none";
    });
  },
  showModal(modal) {
    document.querySelector(modal).style.display = "flex";
    document.querySelector(`.modal_bg`).style.display = "block";
  },
  printError(modal, error) {
    const selectedModal = document.querySelector(modal);
    selectedModal.querySelector(".modal_error").textContent = error;
  },
};

modal.init();
