function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const result = factorial(6);
console.log(result);


// using for loop 
function factorial(number) {
    let result = 1;

    for (let i = number; i >= 1; i--) {
        result *= i;

    }
    return result;
}
const number = 7;
const result2 = factorial(number);
console.log(result2);


// using while loop

function factorial(number) {

    let num = 1;
    let result = 1;
    while (num <= number) {
        result *= num;
    }
    return result;
}
const result3 = factorial(8);
console.log(result3);



// using reverse while loop
function factorial(number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        result *= i;
        i--;
    }
    return result;
}
const result4 = factorial(9);
console.log(result4);