// write a function called make_avg() which will take an three integers and the size of that array and return the average of those values.


function make_avg([n1, n2, n3]) {
    var sum = n1 + n2 + n3;
    var avg = sum / 3;
    return avg;
}
var marks = [10, 20, 30];
var result = make_avg(marks)
console.log(result);

