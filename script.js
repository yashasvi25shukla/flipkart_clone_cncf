document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Product added to cart!");
        });
    });
});
