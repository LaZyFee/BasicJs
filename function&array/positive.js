function onlyPositive(number) {
    let positive = [];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element > 0) {
            positive.push(element);
        }
        else {
            return positive;
        }
    }

}
const numbers = [45, 87, 96, 11, 63, -56, 71, 28];
const positiveValues = onlyPositive(numbers);
console.log(positiveValues);