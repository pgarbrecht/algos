/*
Difference Between Element Sum and Digit Sum of an Array

You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.

Example 1:
Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.
*/

var differenceOfSum = function(nums) {
    //create variables for current number, element sum, digit sum, answer
    let currentNumber;
    let elementSum = 0;
    let digitSum = 0;
    let answer;
    //for loop over each number in the array
    for(let i = 0; i < nums.length; i++) {
        //set current number variable = stringified current number
        currentNumber = nums[i].toString();
        //if current number length = 1, add it to element and digit sum
        if(currentNumber.length === 1){
            elementSum += Number(currentNumber);
            digitSum += Number(currentNumber);
            console.log(elementSum, digitSum);
        }
        //else (longer than one), add it to element sum and loop through it and add each digit to digit sum
        else{
            elementSum += Number(currentNumber);
            for(j=0; j < currentNumber.length; j++) {
                digitSum += Number(currentNumber[j]);
            }
        }
    }
    //set answer = element sum - digit sum
    answer = elementSum - digitSum;
    //return answer
    return answer;
};