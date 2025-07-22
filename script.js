document.addEventListener("DOMContentLoaded", function() {
  let cartCount=0;
  const cartCounter= document.getElementById("cart-count");

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(function(button){
    button.addEventListener("click",function(){
      cartCount++;
      cartCounter.textContent =cartCount;

      alert("Item added to cart! (Now shoping is not avaliable . Marked in ABOUT )");
    });
  });
});