/*
Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5 with no remainder.
answer[i] == "Fizz" if i is divisible by 3 with no remainder.
answer[i] == "Buzz" if i is divisible by 5 with no remainder.
answer[i] == i (as a string) if none of the above conditions are true.

Example:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

var fizzBuzz = function(n) { //a number is passed in
    let answer = []; //create an answer array
    //iterate from 1 to the number that is passed in
    for (let i = 1; i <= n; i++) {
        //if i can be divided by either 3 or 5 with no remainder, push FizzBuzz
        if(i%3 == 0 && i%5 == 0) {
            answer.push("FizzBuzz");
        }
        //if i can be divided by 3 with no remainder but 5 cannot, push Fizz
        else if(i%3 == 0) {
            answer.push("Fizz");
        }
        //else if i can be divided by 5 with no remainder but 3 cannot, push Buzz
        else if(i%5 == 0) {
            answer.push("Buzz");
        } 
        
        //if i can't be divided by 3 or 5 with no remainder, push the number
        else { 
            answer.push(i.toString());
        }
    }
return answer; //return the answer array
};

//test case
console.log(fizzBuzz(30))