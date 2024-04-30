document.addEventListener("DOMContentLoaded", function () {
  const textBlock = document.querySelector(".hero .text-block");
  const divider = document.querySelector(".hero .vertical-divider");
  const button = document.querySelector(".hero .button-38"); // Select the button

  setTimeout(() => {
    textBlock.classList.add("active");
    divider.classList.add("active");
    button.classList.add("active"); // Add 'active' class to button
  }, 300); // Adjust timing as necessary
});
