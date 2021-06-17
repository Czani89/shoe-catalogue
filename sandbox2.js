
const shoeContainer = document.querySelector(".shoeContainer");
const shoeSelect = document.querySelector("#shoes");
const shoeImage = document.querySelector(".shoe-image");
const button = document.querySelector(".btn1");

// const shoeTemplate = document.querySelector(".textTemplate").innerHTML;
// const tempCompile = Handlebars.compile(shoeTemplate);

let catInst = catalogue()
let index = 0;

button.addEventListener("click", function () {

    let selectedObj = catInst.getShoe(shoeSelector(index))
    console.log(selectedObj);
    shoeImage.src = selectedObj.img
    shoeContainer.innerHTML = `We have ${selectedObj.in_stock} ${selectedObj.color} in stock`

})

function shoeSelector(number) {
    if (shoeSelect.value === "mike") {
        index = number;
        return index = 0;
    } else if (shoeSelect.value === "hadidas") {
        index = number;
        return index = 1;
    } else if (shoeSelect.value === "treebok") {
        index = number;
        return index = 2;
    } else if (shoeSelect.value === "balance") {
        index = number;
        return index = 3;
    }
}