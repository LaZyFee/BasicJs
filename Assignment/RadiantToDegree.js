// Problem:1  radianToDegree
// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
// Sample Data:
// Input : 10,25,199
// Output:572.96,1432.39,11401.86

function radianToDegree(value) {
    const pi = 3.1416;
    let result = 0;
    let arr = [];
    for (let i = 0; i < value.length; i++) {
        const ip = value[i];
        result = (ip * 180) / pi;
        arr.push(result.toFixed(2));
        // Math.round(result);
    }
    return arr;
}
const value = [10, 25, 199];
const output = radianToDegree(value);
console.log(output);