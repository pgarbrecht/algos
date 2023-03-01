/*
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:
ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

Example 1:
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

Example 2:
Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
*/

var countMatches = function(items, ruleKey, ruleValue) {
    //create an answer varaiable set to 0 at first
    let answer = 0;
    //check what rule key will be and assign numeric index variable for it
    let index;
    if(ruleKey === 'type'){
        index = 0;
    } else if(ruleKey === 'color'){
        index = 1;
    } else if(ruleKey === 'name'){
        index = 2;
    }
    //loop through the array of arrays
    for(let i=0; i < items.length; i++){
        //check desired index in the current array
        //if it matches the ruleValue, then increment answer
        if(items[i][index] === ruleValue){
            answer += 1;
        }
    }
    //return answer
    return answer;
};