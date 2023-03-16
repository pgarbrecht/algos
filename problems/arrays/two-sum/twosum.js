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
    //we create an empty map
    let map = new Map();
    //we loop through the given nums array
    for (i = 0; i < nums.length; i++) {
        // we create a variable to track current number we are at as we loop
        let current = nums[i];
        //we create a variable to track the difference of target - current number we are at
        let difference = target - current;
        //if that difference exists in map we found the two indexes that give us the answer
        if( difference in map) {
            //and so we return them as the answer
            return [i, map[difference]];
        }
        //else we just add to our map the current number and index then keep looping
        map[current] = i;
    }
};

// Time complexity: O(N), because we loop through array once, as many iterations as number in array
// Space complexity: O(N), because we store data in the map up to as many indexes in array