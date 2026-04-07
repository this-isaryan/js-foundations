// version 1, Only works with Even string

let str1 = "OPPO";

let isPalV1 = true;
let beg = "";
let end = "";

let len = str1.length

for (let i = 0; i < (len/2); i++) {
    beg += str1[i];
}

for (let i = len - 1; i >= len/2; i--) {
    end += str1[i];
}

if (beg == end) {
    isPalV1 = true;
} else {
    isPalV1 = false;
}

console.log(isPalV1);

// version 2 works with both odd and even string

let str2 = "madam";
let isPalV2 = true;

for (let j = 0; j < str2.length/2; j++) {
    if (str2[j] !== str2[str2.length - 1 - j]) {
        isPalV2 = false;
        break;
    }
}

console.log(isPalV2)

// version 3 with case sensitive and spacing and punctuation handling

let str3 = "A man, a plan, a canal: Panama";

str3 = str3.toLowerCase().replace(/[^a-z0-9]/g, "");

let left = 0;
let right = str3.length - 1;
let isPalV3 = true;

while (left < right) {
    if (str3[left] !== str3[right]) {
        isPalV3 = false;
        break;
    }
    left++;
    right--;
}

console.log(isPalV3);