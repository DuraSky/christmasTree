let activeIndex = 0;
const images = document.querySelectorAll(".slideshow img");
const numberOfImages = images.length;
const changeInterval = 2500; // Change image every 5000 milliseconds (5 seconds)

function changeImage() {
  images[activeIndex].classList.remove("fade");
  activeIndex = (activeIndex + 1) % numberOfImages;
  images[activeIndex].classList.add("fade");
}

setInterval(changeImage, changeInterval);
