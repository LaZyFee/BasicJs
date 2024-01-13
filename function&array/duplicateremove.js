
function removeDuplicate(names) {
    const unique = [];

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const names = ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'a', 'c', 'b', 'g', 'h', 'd', 'b'];
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);