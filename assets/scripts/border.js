document.addEventListener("DOMContentLoaded", () => {
  const borderAnimations = document.querySelectorAll(".border-animation");

  // Ensuring both border divs are correctly selected
  if (borderAnimations.length === 2) {
    setTimeout(() => {
      borderAnimations.forEach((border) => {
        border.style.width = "100%"; // Expand width to full
        border.style.left = "0"; // Move left to start from the very beginning
      });
    }, 100); // Small delay for visual effect
  }
});
