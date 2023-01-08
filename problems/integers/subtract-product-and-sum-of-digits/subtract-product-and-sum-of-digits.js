/*
Subtract the Product and Sum of Digits of an Integer
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Example 1:
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
*/

var subtractProductAndSum = function(n) {
    //convert input number to string, set to variable
    let stringifiedNumber = n.toString();
    //initialize product variable
    let product = 1; //set to 1 so we can start multiplying
    //initialize sum variable
    let sum = 0; //set to 0 so we can start adding
    //for loop through each digit in the stringified number
    for(let i = 0; i < stringifiedNumber.length; i++) {
        //do the product calculation on the string digit converted to number
        product = product * Number(stringifiedNumber[i]);
        //do the sum calculation on the string digit converted to number
        sum = sum + Number(stringifiedNumber[i]);
    }
    //calculate product - sum and and assign to answer variable
    let answer = product - sum;
    //return the answer
    return answer;
};