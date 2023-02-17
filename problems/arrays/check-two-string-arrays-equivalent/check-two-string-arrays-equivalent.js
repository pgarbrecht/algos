/*
Check If Two String Arrays are Equivalent

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string.

Example 1:
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
*/

var arrayStringsAreEqual = function(word1, word2) {
    //create variables for concatenated words 1 and 2
    let concatWord1 = '';
    let concatWord2 = '';
    //loop through array 1 and concatenate it into word 1
    for(let i = 0; i < word1.length; i++){
        concatWord1 += word1[i];
    }
    //loop through array 2 and concatenate it into word 2
    for(let i = 0; i < word2.length; i++){
        concatWord2 += word2[i];
    }
    //conditional logic
    //if two words match, then return true
    if(concatWord1 === concatWord2){
        return true;
    } else{ //else, we return false
        return false
    }
};