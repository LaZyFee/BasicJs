function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed += element;
    }
    return reversed;
}
const myString = 'i am a good boy';
const reversed = reverseString(myString);
console.log(reversed);

// using split & join

function reverseWords(str) {
    const words = str.split(' ');
    const result = [];

    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reverse = result.join(' ');
    return reverse;
}
const string = 'i am a good boy';
const reverse = reverseString(string);
console.log(reversed);
