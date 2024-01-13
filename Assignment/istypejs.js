// Problem:2  isJavaScriptFile 
// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 
// Input: 'app.js' 'js.png' 'image.js.png' 'image.jpg.js'
// Output: true false false true


function isJavaScriptFile(fileName) {

    return fileName.endsWith('.js');
}


const file1 = 'app.js';
const file2 = 'js.png';
const file3 = 'image.js.png';
const file4 = 'image.jpg.js';

console.log(isJavaScriptFile(file1));
console.log(isJavaScriptFile(file2));
console.log(isJavaScriptFile(file3));
console.log(isJavaScriptFile(file4));

