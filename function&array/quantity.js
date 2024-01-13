
const shoppingCart = [
    { name: 'shoe', price: 2600, quantity: 2 },
    { name: 'shirt', price: 600, quantity: 5 },
    { name: 'pant', price: 2000, quantity: 4 },
    { name: 'belt', price: 400, quantity: 3 }
];


function totalCost(products) {
    let sum = 0;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum += productTotal;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log(expense);