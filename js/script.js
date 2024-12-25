const weAreButton = document.getElementById("weAreButton");
const imageCards = document.querySelectorAll(".image-card");
const closeButton = document.getElementById("closeButton");
const imagesContainer = document.getElementById("imagesContainer");

weAreButton.addEventListener("click", () => {
  weAreButton.style.display = "none";

  imagesContainer.style.display = "flex";
  closeButton.style.display = "block";

  imageCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200);
  });

  document.body.style.overflow = "scroll";
});

closeButton.addEventListener("click", () => {
  closeImages();
});

function closeImages() {
  imagesContainer.style.display = "none";

  closeButton.style.display = "none";

  weAreButton.style.display = "block";

  document.body.style.overflow = "auto";

  alert("Bagus kan wkwkwk");
}
