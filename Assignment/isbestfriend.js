// Problem 5: isBestFriend
// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

// Input: { name: "abul", friend: "babul" },{ name: "babul", friend: "abul" }

// { name: "abul", friend: "kabul" },{ name: "kabul", friend: "sabul" }

// { name: "doe", friend: "alex" },{ name: "john", friend: "doe" }

// Output: true false false 

function isBestFriend(persons) {
    return persons[0].friend === persons[1].name && persons[1].friend === persons[0].name;
}

const people = [
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" }
];

const result = isBestFriend(people);
console.log(result);

const people2 = [
    { name: "abul", friend: "kabul" },
    { name: "kabul", friend: "sabul" }
];

const result2 = isBestFriend(people2);
console.log(result2);

const people3 = [
    { name: "doe", friend: "alex" },
    { name: "john", friend: "doe" }
];

const result3 = isBestFriend(people3);
console.log(result3);

