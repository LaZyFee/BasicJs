function getMax(n1, n2, n3) {
    return Math.max(n1, n2, n3);

}
let maxValue = getMax(12, 21, 19);
console.log(maxValue);


//   -------using an array---------
function findMaxFromArray(arr) {
    return Math.max(...arr);
}

let values = [15, 3, 8, 12];
let maxFromArray = findMaxFromArray(values);
console.log(maxFromArray); 
