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
            in_stock: 4,
            img: "./img/nike sneaker.jpg"
        },
        {
            color: 'white',
            brand: "mike",
            size: 7,
            in_stock: 12,
            img: "./img/nike sneaker.jpg"
        },
        {
            color: 'orange',
            brand: "mike",
            size: 9,
            in_stock: 8,
            img: "./img/nike sneaker.jpg"
        },
        {
            color: 'blue',
            brand: "hadidas",
            size: 9,
            in_stock: 9,
            img: "./img/adidas sneaker.jpg"
        },
        {
            color: 'browm',
            brand: "hadidas",
            size: 8,
            in_stock: 3,
            img: "./img/adidas sneaker.jpg"
        },
        {
            color: 'white',
            brand: "hadidas",
            size: 7,
            in_stock: 10,
            img: "./img/adidas sneaker.jpg"
        },
        {
            color: 'orange',
            brand: "hadidas",
            size: 6,
            in_stock: 6,
            img: "./img/adidas sneaker.jpg"
        },
        {
            color: 'blue',
            brand: "treebok",
            size: 7,
            in_stock: 14,
            img: "./img/reebok sneaker.jpg"
        },
        {
            color: 'brown',
            brand: "treebok",
            size: 8,
            in_stock: 9,
            img: "./img/reebok sneaker.jpg"
        },
        {
            color: 'white',
            brand: "treebok",
            size: 6,
            in_stock: 12,
            img: "./img/reebok sneaker.jpg"
        },
        {
            color: 'orange',
            brand: "treebok",
            size: 9,
            in_stock: 17,
            img: "./img/reebok sneaker.jpg"
        },
        {
            color: 'blue',
            brand: "balance",
            size: 6,
            in_stock: 4,
            img: "./img/new_balance_sneaker.jpeg"
        },
        {
            color: 'brown',
            brand: "balance",
            size: 7,
            in_stock: 4,
            img: "./img/new_balance_sneaker.jpeg"
        },
        {
            color: 'white',
            brand: "balance",
            size: 8,
            in_stock: 9,
            img: "./img/new_balance_sneaker.jpeg"
        },
        {
            color: 'orange',
            brand: "balance",
            size: 9,
            in_stock: 5,
            img: "./img/new_balance_sneaker.jpeg"
        }
    ];
    let shoeObj = {};

    function myShoe(brands, sizes, colors) {
        for (let i = 0; i < shoes.length; i++) {
            if (brands === shoes[i].brand && sizes == shoes[i].size && colors === shoes[i].color) {
                shoeObj = shoes[i];
                return true
            }
        }
    }
    function getShoeObj() {
        return shoeObj
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
        myShoe,
        getShoeObj,
        shoeProp,
        shoes,
    }
}