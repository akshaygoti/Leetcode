// // const fun=(n)=>
// // {
   
// //  let fact = 1;
// //     let counter = 0;
// //     for (let i = 1; i <= n; i++) {
// //         fact *= i                            // 1*2*3*4*5  24*5=120 one zero.
// //     }
// //         while (fact % 10 == 0) {
// //             let val = fact / 10;
// //             fact = val;
// //             counter++;
// //         }
    
// //     return counter;

// // }
// // console.log(fun(40));



const fun=(n)=>
{
    let number = 0;
    // let counter = 0;
    for (let i = 5; i <= n; i += 5) {
        let num = i;                                        // 5/9=9zero
    //   number *= i;                                              
        while(num % 5 == 0){
        num /=5;
        number++;
      }
    }
  return number
}
console.log(fun(40));


// Function to count trailing zeros in the factorial of a number
function trailing_zeros_factorial(n) {
    let result = 0; // Initialize the count of trailing zeros to zero
    for (let i = 5; i <= n; i += 5) { // Loop to calculate the factorial
        let num = i; // Store the current number
        while (num % 5 === 0) { // Check if the number is divisible by 5
            num /= 5; // Divide the number by 5
            result++; // Increment the count of trailing zeros
        }
    }
    return result; // Return the total count of trailing zeros in the factorial of n
}

console.log(trailing_zeros_factorial(100)); // Output: 2 (factorial of 10 has two trailing zeros)