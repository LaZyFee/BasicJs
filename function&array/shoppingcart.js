
const shoppingCart = [
    { name: 'shoe', price: 2600 },
    { name: 'shirt', price: 600 },
    { name: 'pant', price: 2000 },
    { name: 'belt', price: 400 }
];


function totalCost(products) {
    let sum = 0;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum += product.price;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log(expense);