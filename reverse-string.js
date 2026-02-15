let str = "Hello World";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
}

console.log(`This is the string "${str}"`);
console.log(`This is the reversed string "${reversedStr}"`);