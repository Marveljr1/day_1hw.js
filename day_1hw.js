//==================Exercise #1 ==========//
/*
    Given an array of numbers 1 through 15, loop through the array and log one of the following values for each number:
    "FizzBuzz" - if number is divisible by 3 and 5
    "Fizz" - if number is divisible by 3
    "Buzz" - if number is divisible by 5
    The number - if number is not divisible by 3 or 5
*/

let exerciseOneArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


for( var i=1; i<21; i++ ) {
    if( (i%3) === 0 && (i%5) === 0 ) {
        console.log( "FizzBuzz" );
    }else if( (i%3) === 0 ) {
        console.log( "Fizz" );
    }else if( (i%5) === 0 ) {
        console.log( "Buzz" );
    }else{
        console.log( i );
    }
}



//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26
Explain: 3 + 5 + 7 + 9 + 2 = 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 

let numbers = [3, 5, 7, 9, -10, 2, -22, -1]; 

console.log(numbers)
let sumNums = 0
for (n of numbers) {
    if (n > 0) {
        sumNums += n
    }
}
console.log(sumNums)