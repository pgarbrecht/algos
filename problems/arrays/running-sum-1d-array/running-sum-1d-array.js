/* 
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

var runningSum = function(nums) {
    //initialize empty answer array variable
    let answer = [];
    //initalize sum variable at 0
    let sum = 0;
    //loop through input array
    for(let i = 0; i<nums.length; i++) {
        //increase sum variable by current value
        sum += nums[i];
        //push sum variable value to answer array
        answer.push(sum);
    }
    //return answer array
    return answer;
};