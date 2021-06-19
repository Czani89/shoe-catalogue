
const shoeContainer = document.querySelector(".shoeContainer");
const shoeBrand = document.querySelector("#shoes");
const shoeSize = document.querySelector("#size");
const shoeColour = document.querySelector("#colour");
const shoeImage = document.querySelector(".shoe-image");
const button = document.querySelector(".btn1");

// const shoeTemplate = document.querySelector(".textTemplate").innerHTML;
// const tempCompile = Handlebars.compile(shoeTemplate);

let catInst = catalogue()
let index = 0;

button.addEventListener("click", function () {
    myShoe(shoeBrand.value, shoeSize.value, shoeColour.value)

    // let selectedObj = catInst.getShoe(shoeSelector(index))
    // console.log(selectedObj);
    // shoeImage.src = selectedObj.img
    // shoeContainer.innerHTML = `We have ${selectedObj.in_stock} ${selectedObj.color} in stock`
})

function myShoe(brands, sizes, colors) {

    for (let i = 0; i < catInst.shoes.length; i++) {
        if (brands === catInst.shoes[i].brand && sizes == catInst.shoes[i].size && colors === catInst.shoes[i].color) {
            shoeContainer.innerHTML = `We have ${catInst.shoes[i].in_stock} ${catInst.shoes[i].color} in stock`
        }
    }
}

// function shoeSelector(number) {
//     if (shoeBrand.value === "mike" || ) {
//         index = number;
//         return index = 0;
//     } else if (shoeSelect.value === "hadidas") {
//         index = number;
//         return index = 1;
//     } else if (shoeSelect.value === "treebok") {
//         index = number;
//         return index = 2;
//     } else if (shoeSelect.value === "balance") {
//         index = number;
//         return index = 3;
//     }
// }