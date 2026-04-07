const vowels = "aeiouAEIOU";

let str = "My name is Aryan, what about you."
var count = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }
}

console.log(`The number of vowels in the given string is ${count}`);