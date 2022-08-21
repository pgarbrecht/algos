/*
  ARRAY OF UNIQUE VALUES
  Write a function called uniqueVals that will return an array of unique values with no duplicates. It will accept 2 arguments, the first will be the length of the returned array and the second will the be the max value in the random set..
      
  Input: uniqueVals(5,10)
  
  Output: [1,7,3,4,10]
 */

// INTERVIEW QUESTION(S)
//PSEUDOCODE
const uniqueVals = (length, maxValue) => {
    // Create answer array variable
    let answer = [];
    //while loop that iterates until we find 5 valid answers
    while (answer.length < 5) {
    //inside loop, generate random number within range 
      let num = Math.floor(Math.random() * maxValue + 1);
      //if random number not in answer array already, add it there
      if(answer.includes(num) != true) {
        answer.push(num)
      }
    }
    //outside loop, return the answer array variable
    return answer;
  };
  
  console.log("this is uniqueVals", uniqueVals(5, 10))
  