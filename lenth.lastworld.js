// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

// const s = "akshay goti";
// function lengthOfLastWord(s) {

//     if (s.length === 0) {
//         return 0;
//     } else {
//         const words = s.trim().split(' ');   // trim e bane baju ni space ne remove kare
//         const lengthOfLastWord = words[words.length - 1].length;
//         return lengthOfLastWord;
//     }
// }

// const output = lengthOfLastWord(s);
// console.log(output);

// 2

// const s = "   akshay goti   ";
// function lengthOfLastWord(s) {

//     if (s.length === 0) {
//         return 0;
//     } else {
//         const words = s.trim().split(' ');   // trim e bane baju ni space ne remove kare
//         const lengthOfLastWord = words[words.length - 1].length;
//         return lengthOfLastWord;
//     }
// }

// const output = lengthOfLastWord(s);
// console.log(output);


// 3

const s = "   akshay goti my function all don";
function lengthOfLastWord(s) {

    if (s.length === 0) {
        return 0;
    } else {
        const words = s.trim().split(' ');   // trim e bane baju ni space ne remove kare
        const lengthOfLastWord = words[words.length - 1].length;
        return lengthOfLastWord;
    }
}

const output = lengthOfLastWord(s);
console.log(output);