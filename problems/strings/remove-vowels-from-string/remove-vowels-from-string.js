/* 
Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

Example 1:
Input: s = "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"

Example 2:
Input: s = "aeiou"
Output: ""

Constraints:
1 <= s.length <= 1000
s consists of only lowercase English letters.
*/

//Answer
var removeVowels = function(s) {
    //initialize empty answer variable
    let answer = '';
    //for loop over length of input string
    for(let i=0; i<s.length; i++){
        //if letter is not a vowel,
        if(s[i] != 'a' && s[i] !=  'e' && s[i] != 'i' && s[i] != 'o' && s[i] != 'u'){
            //push it to answer variable
            answer += s[i]
        } 
    }
    //return answer variable
    return answer;
};

//Test case
let s = "leetcodeisacommunityforcoders"

//Run test
console.log(removeVowels(s))