const productCards = document.querySelectorAll(".product-card");

productCards.forEach(function (card) {
    const minusButton = card.querySelector(".minus-btn");
    const plusButton = card.querySelector(".plus-btn");
    const quantityText = card.querySelector(".quantity");

    // Increase quantity Functionality
    plusButton.addEventListener("click", function () {
        let currentQuantity = Number(quantityText.textContent);
        currentQuantity++;
        quantityText.textContent = currentQuantity;
    });

    // Decrease quantity until hit 1
    minusButton.addEventListener("click", function () {
        let currentQuantity = Number(quantityText.textContent);

        if (currentQuantity > 1) {
            currentQuantity--;
            quantityText.textContent = currentQuantity;
        }
    });
});