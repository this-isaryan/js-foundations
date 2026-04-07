/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let s = "≈";
let t = "nagaram";

var isAnagram = function (s, t) {
    let arrS = s.split("");
    let arrT = t.split("");

    arrS = arrS.sort();
    arrT = arrT.sort();

    if (JSON.stringify(arrS) === JSON.stringify(arrT)) {
        return true;
    } else {
        return false;
    }
};

console.log(`The result is: ${isAnagram(s, t)}`)