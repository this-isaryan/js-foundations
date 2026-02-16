// Version 1 - using Math function

let arr = [12, 45, 87, 76, 4];

function maxArr(arr) {
    return Math.max.apply(null, arr);
}

let result = maxArr(arr);

console.log(`The maximum array is ${result}`);

// Version 2 - craeting max method

function maxMethodArr(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

console.log(`The maximum array is ${maxMethodArr(arr)}`);