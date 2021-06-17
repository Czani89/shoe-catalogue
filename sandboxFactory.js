function catalogue() {
    var shoes = [
        {
            color: 'blue',
            brand: "Mike",
            size: 8,
            in_stock: 5,
            img: "./img/nike sneaker.jpg"
        },
        {
            color: 'orange',
            brand: "Hadidas",
            size: 9,
            in_stock: 5,
            img: "./img/adidas sneaker.jpg"
        }
        ,
        {
            color: 'orange',
            brand: "Treeboks",
            size: 7,
            in_stock: 10,
            img: "./img/reebok sneaker.jpg"
        },
        {
            color: 'orange',
            brand: "Old Balance",
            size: 10,
            in_stock: 4,
            img: "./img/new_balance_sneaker.jpeg"
        }
    ];
    let shoeObj = {};

    function getShoe(index) {
        shoeObj = shoes[index];
        return shoeObj;
    }

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
        getShoe,
        shoeProp,
        shoes,
    }
}