let str = "Hello World";
let reversedStr = "";
let reversedJSWay = str.split("").reverse().join("");

for (let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
}

console.log(`This is the string "${str}"`);
console.log(`This is the reversed string "${reversedStr}"`);
console.log(`This is the JS Way reversed string "${reversedJSWay}"`);