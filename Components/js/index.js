let slider = document.getElementById("bl-ticker-track");
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    slider.scrollBy({ left: 10, behavior: "smooth" });
  }
});

else if (event.key === "ArrowLeft") {
    slider.scrollBy({ left: -10, behavior: "smooth" });
  }