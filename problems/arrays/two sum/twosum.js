/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. 

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function(nums, target) {
    let answer = [];
    
    //nested for loop to check sum between items in each array
    for(i=0; i<nums.length; i++) {
        for(j=i+1; j<nums.length; j++) {
            //function to sum the 2 items from each array
            let sumCheck = nums[i] + nums[j];
            //if numbers are same skip, as we can't use same twice
            if(i === j) {
                continue;
            }
            //if two numbers sum equals target add to answer array
            if (sumCheck === target) {
                answer.push(i,j);
            }
        }
        //break when you get two numbers that sum to equal target
        if (answer.length ===2) {
        break;
        }
    }
    return answer;
};