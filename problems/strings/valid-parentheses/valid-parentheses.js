/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

var isValid = function(s) { //pass in input string s
    const stack = []; //create empty stack array
      
      for (let i = 0; i < s.length; i += 1) { //loop over length of input string
        const top = stack[stack.length - 1]; //create variable for top of stack
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') { //if there is a valid open parenthesis symbol
          stack.push(s[i]); //then add symbol to stack
        } else if (s[i] === ')' && top === '(' && stack.length !== 0) { //
          stack.pop(); //if a ) close tag matching ( open tag is found, empty stack
        } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
          stack.pop(); //if a ] close tag matching [] open tag is found, empty stack
        } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
          stack.pop(); //if a } close tag matching { open tag is found, empty stack
        } else {
          return false; //if none of the above true, then return false
        }
      }
      
      return stack.length === 0; //if input met requirement, stack is no empty and will return "true" as answer, if stack not empty will return false
    };