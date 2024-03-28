// function reverseWords(str) {
//     let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
//     return reverseWordArr.join(" ");
//   }
//   console.log(reverseWords("hello akshay"));


// function reverseInPlace(str) {
//     var words = [];
//     words = str.split("\s+");
//     var result = "";
//     for (var i = 0; i < words.length; i++) {
//         return result += words[i].split('').reverse().join('');
//     }
// }
// console.log(reverseInPlace("hello world"));


function reversestr(n) {
    let words = n.trim().split(/\s+/);
    let reversestr = words.reverse();
    return reversestr.join(' ');
}


console.log(reversestr("the sky is blue"));