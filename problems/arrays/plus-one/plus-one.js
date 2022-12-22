/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

var plusOne = function(digits) {

    //PATH 1: FOR WHEN ARRAY HAS 9S AND NON-9S
    //loop backwards over the input array
    for(let i = digits.length -1; i >= 0; i--){
        //if current index's value is 9,
        if(digits[i] === 9){
            //change it to 0 
            digits[i] = 0;
        } else {
            //else (not 9), increase current index's value by 1
            digits[i] += 1;
            //and return the modified array as final answer
            return digits;
        }
    }

    //PATH 2: FOR WHEN ARRAY HAS ONLY 9S (CONTINUATION OF PATH 1)
    //copy value of array, but insert another index in front
    digits = new Array(digits.length + 1).fill(0);
    //set this newly added index's value to 1
    digits[0] = 1;
    //return the modified array as answer
    return digits;
};