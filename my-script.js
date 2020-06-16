if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// The first function we fire as soon as the DOM is ready
function init() {
  console.log("DOM is ready");

  const modal = document.querySelector(".modal");
  const button = document.querySelector("#services button");
  const closeButton = document.querySelector(".close-button");

  console.log(button);

  button.onclick = function() {
    console.log("user click button");
    openModal();
  };
}

function openModal() {
  console.log("open modal");
}

function closeModal() {
  console.log("close modal");
}
