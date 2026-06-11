const productCards = document.querySelectorAll(".product-card");
const cartCount = document.querySelector(".cart-count");

let totalCartItems = 0;

productCards.forEach(function (card) {
    const minusButton = card.querySelector(".minus-btn");
    const plusButton = card.querySelector(".plus-btn");
    const quantityText = card.querySelector(".quantity");
    const addToCartButton = card.querySelector(".cart-btn");

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

    // Add selected quantity to cart count
    addToCartButton.addEventListener("click", function () {
        let currentQuantity = Number(quantityText.textContent);

        totalCartItems = totalCartItems + currentQuantity;
        cartCount.textContent = totalCartItems;
    });
});
