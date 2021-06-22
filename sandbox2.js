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
    if (shoeBrand.value && shoeSize.value && shoeColour.value) {
        catInst.myShoe(shoeBrand.value, shoeSize.value, shoeColour.value)
        if (catInst.getShoeObj().in_stock == 0 || catInst.getShoeObj().in_stock == undefined) { 
            errorMessage("We currently have no stock in the size you selected.");
        } else {
            shoeImage.src = catInst.getShoeObj().img;
            shoeContainer.innerHTML = `We have ${catInst.getShoeObj().in_stock} ${catInst.getShoeObj().color} ${catInst.getShoeObj().brand} in stock`
        }
    } else {
        errorMessage("Please select all the fields provided to see you kicks")
    }
})

function errorMessage(error) {
    shoeContainer.innerHTML = error;
    setTimeout(function () { shoeContainer.innerHTML = ""; }, 5000);
}

// addToStock.addEventListener("click", function () {
//     catInst.myShoe(shoeBrand1.value, shoeSize1.value, shoeColour1.value)
// })
