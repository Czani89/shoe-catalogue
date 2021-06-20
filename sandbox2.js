
const shoeContainer = document.querySelector(".shoeContainer");
const shoeBrand = document.querySelector("#shoes");
const shoeSize = document.querySelector("#size");
const shoeColour = document.querySelector("#colour");
const shoeImage = document.querySelector(".shoe-image");
const selectButton = document.querySelector(".btn1");
const addToCartBtn = document.querySelector(".addToCart")

// const shoeTemplate = document.querySelector(".textTemplate").innerHTML;
// const tempCompile = Handlebars.compile(shoeTemplate);

let catInst = catalogue()

selectButton.addEventListener("click", function () {
    catInst.myShoe(shoeBrand.value, shoeSize.value, shoeColour.value)
    shoeImage.src = catInst.getShoeObj().img
    shoeContainer.innerHTML = `We have ${catInst.getShoeObj().in_stock} ${catInst.getShoeObj().color} ${catInst.getShoeObj().brand} in stock`
})

addToCartBtn.addEventListener("click", function () {

})
