const brand = document.querySelector("#brand")
const size = document.querySelector("#size")
const color = document.querySelector("#color")
const button = document.querySelector(".btn")

const shoeTemplate = document.querySelector(".textTemplate").innerHTML;
const tempCompile = Handlebars.compile(shoeTemplate);

let catInst = catalogue()

button.addEventListener("click", function () {

    localStorage.setItem("catalogue", JSON.stringify(catInst.shoes));
})