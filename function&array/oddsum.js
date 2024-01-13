// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.


function findOddSum(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }

    }
    return sum;
}


function getOddNumberOfAnArray(numbers) {
    const oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const array = [5, 7, 8, 10, 45, 30];
const oddNumbers = getOddNumberOfAnArray(array);
console.log(oddNumbers);
const oddSum = findOddSum(array);
console.log("Sum of odd numbers:", oddSum);