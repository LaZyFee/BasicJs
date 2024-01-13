const products = [
    { id: 1, name: 'iphone', price: 15000 },
    { id: 2, name: 'mi Phone', price: 15000 },
    { id: 3, name: 'vivo phone', price: 15000 },
    { id: 4, name: 'macbook air', price: 15000 },
    { id: 5, name: 'dell laptop', price: 15000 },
    { id: 6, name: 'hp laptop', price: 15000 },
    { id: 7, name: 'lenevo laptop', price: 15000 },
    { id: 8, name: 'samsung Phone', price: 15000 },
]

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);
