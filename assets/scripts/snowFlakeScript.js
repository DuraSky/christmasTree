document.addEventListener("DOMContentLoaded", function () {
  var snowflakeContainer = document.querySelector(".snowflakes");

  function createSnowflake() {
    var snowflakeElement = document.createElement("div");
    snowflakeElement.className = "snowflake";
    snowflakeElement.style.left = Math.random() * 100 + "%";
    snowflakeElement.style.animationDuration = 5 + Math.random() * 10 + "s"; // Random duration between 5 to 15 seconds
    snowflakeElement.style.animationDelay = Math.random() * 10 + "s"; // Random delay
    snowflakeContainer.appendChild(snowflakeElement);

    // Remove snowflake after it falls
    setTimeout(() => {
      snowflakeElement.remove();
    }, 15000); // Adjusted to match maximum animation duration
  }

  // Generate snowflakes at intervals
  setInterval(createSnowflake, 300); // Adjust interval for more/less frequent snowflakes
});
