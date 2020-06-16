// If DOM is ready, fire the function init
// If DOM is still loading, wait for it
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// The first function we fire as soon as the DOM is ready
function init() {
  console.log("DOM is ready");

  const openButton = document.querySelector("#services button.open");
  const closeButton = document.querySelector("#services button.close");

  openButton.onclick = function() {
    console.log("user click button");
    openModal();
  };
}

function openModal() {
  console.log("open modal");
  const modal = document.querySelector("#services .modal");
  modal.classList.add("open");
  modal.classList.remove("close");
}

function closeModal() {
  console.log("close modal");
  const modal = document.querySelector("#services .modal");
  modal.classList.remove("open");
  modal.classList.add("close");
}
