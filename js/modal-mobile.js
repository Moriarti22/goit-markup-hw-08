(() => {
  const refs = {
    openModalMobile: document.querySelector("[data-mobile-open]"),
    closeModalMobile: document.querySelector("[data-mobile-close]"),
    modal: document.querySelector("[data-mobile]"),
  };

  refs.openModalMobile.addEventListener("click", toggleMobile);
  refs.closeModalMobile.addEventListener("click", toggleMobile);

  function toggleMobile() {
    refs.modal.classList.toggle("is-hidden");
  }
})();