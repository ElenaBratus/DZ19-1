let productsCountEl = document.querySelector(".product-count");
let addToCartBt = document.querySelectorAll(".cart");
console.log(productsCountEl);
console.log(addToCartBt); 
/*for (let i = 0; i < addToCartBt.length; i++) {
    addToCartBt[i].addEventListener("click", function () {
        console.log("clicked");
    })
} */
addToCartBt.forEach((item) =>
item.addEventListener("click", function () {
    /*let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductsCount + 1;*/
    productsCountEl.textContent = +productsCountEl.textContent + 1;
}));
let likeBtn = document.querySelectorAll(".like");
console.log(likeBtn);
likeBtn.forEach((item) => {
   item.addEventListener("click", function () {
/*if (item.classList.contains("liked")) {
item.classList.remove("liked");
} else {
    item.classList.add("liked");
}*/
item.classList.toggle("liked");
});

});
 let openForma = document.querySelectorAll(".details");
let forma = document.querySelector(".forma");
let closeBtn = document.querySelector(".close");

openForma.forEach((item) => {
    item.addEventListener("click", function () {
       forma.style.display = "block";  
})});
closeBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    forma.style.display = "none";
    })


$(".slider-block").slick({
    dots: true,
    
});
let slider = document.querySelector(".slider-block");
console.log(slider);

