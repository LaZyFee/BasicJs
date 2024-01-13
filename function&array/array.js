// var itmes = ["apple", "orange", "lemon", "cocoanut"];
// var c = 0;

// for (var i = 0; i < itmes.length; i++) {
//     var c = itmes[i];
//     console.log(c);
// }

var fruits = ['apple', 'banana', 'orrange'];
{
    console.log(fruits);
    var bananaIndex = fruits.indexOf('banana');
    console.log(bananaIndex);


    fruits[bananaIndex] = 'mango'
    console.log(fruits);


    fruits.pop();
    console.log(fruits);

    fruits.push('watermelon');
    console.log(fruits);


}