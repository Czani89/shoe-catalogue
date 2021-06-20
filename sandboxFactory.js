function catalogue() {
    var shoes = [
        {
            color: 'blue',
            brand: "mike",
            size: 8,
            in_stock: 5,
            img: "./img/nike sneaker.jpg"
        },
        {
            color: 'brown',
            brand: "mike",
            size: 6,
            in_stock: 5,
            img: "./img/nike sneaker.jpg"
        },
        {
            color: 'white',
            brand: "mike",
            size: 7,
            in_stock: 5,
            img: "./img/nike sneaker.jpg"
        },
        {
            color: 'orange',
            brand: "hadidas",
            size: 9,
            in_stock: 5,
            img: "./img/adidas sneaker.jpg"
        }
        ,
        {
            color: 'orange',
            brand: "treebok",
            size: 7,
            in_stock: 10,
            img: "./img/reebok sneaker.jpg"
        },
        {
            color: 'orange',
            brand: "balance",
            size: 10,
            in_stock: 4,
            img: "./img/new_balance_sneaker.jpeg"
        }
    ];
    let shoeObj = {};
    let shoeSize = "";
    let shoeBrand = "";
    let shoeColor = "";

    function myShoe(brand, size, color) {
        for (let i = 0; i < shoes.length; i++) {
            if (brand === shoes[brand] && size == shoes[size] && color === shoes[color]) {
                shoeBrand = brand;
                shoeSize = size;
                shoeColor = color;
            }
        }
    }
    function getBrand() {
        return shoeBrand;
    }
    function getSize() {
        return shoeSize;
    }
    function getColour() {
        return shoeColor;
    }
    // function getShoe(index) {
    //     shoeObj = shoes.filter(shoe){

    //     };

    //     console.log(shoeObj);
    //     return shoeObj;
    // }

    function shoeProp(prop) {
        let shoeProp = shoeObj[prop];
        return shoeProp;
    }

    // function shoeCheck(brand) {
    //     let lowerBrand = brand.toLowerCase()
    //     if (shoes[lowerBrand] === undefined) {
    //         shoes[lowerBrand] = 1;
    //     } else {
    //         shoe[lowerBrand]++;
    //     }
    // }
    return {
        // getShoe,
        shoeProp,
        shoes,
    }
}