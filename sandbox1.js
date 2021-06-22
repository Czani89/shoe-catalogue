const shoeBrand1 = document.querySelector("#shoes1");
const shoeSize1 = document.querySelector("#size1");
const shoeColour1 = document.querySelector("#colour1");
const addToStock = document.querySelector(".add-stock")
const stockValue = document.querySelector("#stock")
const message = document.querySelector(".message")

// const shoeTemplate = document.querySelector(".textTemplate").innerHTML;
// const tempCompile = Handlebars.compile(shoeTemplate);
let shoesFromStorage = {};
if (localStorage["catalogue"]) {
    shoesFromStorage = JSON.parse(localStorage.getItem("catalogue"))
}
let catInst1 = catalogue();
let regex = /^d{3}$/

addToStock.addEventListener("click", function () {
    if (catInst1.myShoe(shoeBrand1.value, shoeSize1.value, shoeColour1.value)) {
        if (regex.test(Number(stockValue.value))) {
            catInst1.getShoeObj().in_stock += Number(stockValue.value);
            localStorage.setItem("catalogue", JSON.stringify(catInst1.shoes));
            stockValue.value = "";
            errorMessage1("Shoes have been succefully added.");
        } else {
            errorMessage1("Please enter a valid number for the shoe you want to enter.");
        }
    } else {
        errorMessage1("Please select all the fields provided to see you kicks.");
    }
})

function errorMessage1(error) {
    message.innerHTML = error;
    setTimeout(function () { message.innerHTML = ""; }, 5000);
}