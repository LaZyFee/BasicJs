// Problem 3: oilPrice

// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।  ভিডিও ভালো করে দেখবে। 
// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

// Sample Data
// Input: 1, 1, 1    30, 20, 10    1,0,2   0,2,3
// Output: 379 7370   384  665

function oilPrice(v1, v2, v3) {
    const disselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    return disselPrice * v1 + petrolPrice * v2 + octanePrice * v3;
}
const value = oilPrice(1, 1, 1);
console.log(value);
const value2 = oilPrice(30, 20, 10);
console.log(value2);
const value3 = oilPrice(1, 0, 2);
console.log(value3);
const value4 = oilPrice(0, 2, 3);
console.log(value4);