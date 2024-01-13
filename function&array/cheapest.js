const phones = [
    { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'vivo', camera: 12, storage: '32gb', price: 26000, color: 'black' },
    { name: 'iphone', camera: 12, storage: '32gb', price: 86000, color: 'golden' },
    { name: 'nokia', camera: 12, storage: '32gb', price: 16000, color: 'aqua' },
    { name: 'oneplus', camera: 12, storage: '32gb', price: 46000, color: 'blue' },
    { name: 'mi', camera: 12, storage: '32gb', price: 30000, color: 'green' },
];

function chepeastPhone(phones) {
    let chepast = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < chepast.price) {
            chepast = phone;
        }
    }
    return chepast;
}
const mySelection = chepeastPhone(phones);
console.log(mySelection);