/*
Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

Example:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

var fizzBuzz = function(n) {
    let answer = []; //create an answer array
    //iterate from 1 to the number that is passed in
    for (let i = 1; i <= n; i++) {
        //if i is divisble by 3 but not 5, push Fizz
        if(i%3 == 0 && i%5 !== 0) {
            answer.push("Fizz");
        }
        //else if i is divisble by 5 and not 3, push Buzz
        else if(i%5 == 0 && i%3 !==0) {
            answer.push("Buzz");
        } 
        //else if i is divisible by 3 and 5, push FizzBuzz
        else if(i%3 == 0 && i%5 == 0) {
            answer.push("FizzBuzz");
        }
        //if i isn't divisible by 3 or 5, push the number
        else { 
            answer.push(i.toString());
        }
    }
return answer; //return the answer array
};