/*
 Jewels and Stones

You're given a string variable called jewels representing the types of stones that are jewels, and a stones string variable representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
 
Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
*/

var numJewelsInStones = function(jewels, stones) {
    //create answer variable counter, start at 0
    let answer = 0;
    // loop through stones
    for(let i = 0; i < stones.length; i++){
        //on each iteration, check if jewels contains the current character in stones,
        if(jewels.includes(stones[i])){
            // if so increment answer
            answer += 1;
        }
    }
    //return the answer
    return answer;
};