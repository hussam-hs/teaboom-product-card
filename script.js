
const packages = [
  {
    size: "100 г",
    article: "01306",
    oldPrice: "349,20 ₽",
    price: "326,40 ₽",
  },
  {
    size: "500 г",
    article: "01307",
    oldPrice: "1 646 ₽",
    price: "1 432 ₽",
  },
  {
    size: "1000 г",
    article: "01308",
    oldPrice: "2 592 ₽",
    price: "2 064 ₽",
  },
  {
    size: "5000 г",
    article: "01309",
    oldPrice: "8 710 ₽",
    price: "6 320 ₽",
  },
];


const sizesContainer = document.querySelector("#sizes");
const articleElement = document.querySelector("#article");
const oldPriceElement = document.querySelector("#old-price");
const currentPriceElement = document.querySelector("#current-price");

sizesContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".size-option");


  if (!button) {
    return;
  }

  const index = Number(button.dataset.index);
  const selectedPackage = packages[index];


  if (!selectedPackage) {
    return;
  }


  articleElement.textContent = selectedPackage.article;
  oldPriceElement.textContent = selectedPackage.oldPrice;
  currentPriceElement.textContent = selectedPackage.price;


  const sizeButtons = sizesContainer.querySelectorAll(".size-option");

  sizeButtons.forEach((sizeButton) => {
    const isSelected = sizeButton === button;

    sizeButton.classList.toggle("is-selected", isSelected);
    sizeButton.setAttribute("aria-pressed", String(isSelected));
  });
});