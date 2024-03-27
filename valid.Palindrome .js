// -> convert the number to a string.
//->  take two pointers, at the start and end of the string.
//->  if the digits at both pointers are different, it's not a palindrome.
//->  we increment starting pointer and decrement the end pointer iteratively.
//->  if the loop exits, then it was a palindrome.




let isPalindrome = function(s) {
    const stripped =
	   s.replace(/[^a-z0-9]/gi, '') // matches any non-alphanumeric character
	    .toLowerCase()
	
    const reverse = 
           stripped.split('')
                   .reverse()
	           .join('')
		   .toLowerCase()

    if (stripped === reverse) {
        return true
    }

    return false
}

const input = "A man, a plan, a canal: Panama"
console.log(isPalindrome(input)) // output true

const input2 = "racecar2"
console.log(isPalindrome(input2)) // output false 

const input3 = " "
console.log(isPalindrome(input3)) // output true