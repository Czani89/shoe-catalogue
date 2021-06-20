
const shoeContainer = document.querySelector(".shoeContainer");
const shoeBrand = document.querySelector("#shoes");
const shoeSize = document.querySelector("#size");
const shoeColour = document.querySelector("#colour");
const shoeImage = document.querySelector(".shoe-image");
const selectButton = document.querySelector(".btn1");

// const shoeTemplate = document.querySelector(".textTemplate").innerHTML;
// const tempCompile = Handlebars.compile(shoeTemplate);

let catInst = catalogue()
let index = 0;

selectButton.addEventListener("click", function () {
    myShoe(shoeBrand.value, shoeSize.value, shoeColour.value)
})

function myShoe(brands, sizes, colors) {

    for (let i = 0; i < catInst.shoes.length; i++) {
        if (brands === catInst.shoes[i].brand && sizes == catInst.shoes[i].size && colors === catInst.shoes[i].color) {
            shoeImage.src = catInst.shoes[i].img
            shoeContainer.innerHTML = `We have ${catInst.shoes[i].in_stock} ${catInst.shoes[i].color} ${catInst.shoes[i].brand} in stock`
        }
    }
}

