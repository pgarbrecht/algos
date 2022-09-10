/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

Input: []  
Output: 0  - no values return 0

Input: [1]
Output: 1  - only 1 number return that number

Input: [3,6]
Output: 18  - 3 * 6 = 18 which is the largest sum of adjacent numbers

Input: [3, 6, -2, -5, 7, 3] 
Output: 21  - 7 * 3 = 21 which is the largest sum of adjacent numbers
*/

// TEST CASES
console.log(adjacentElementsProduct([])) // 0
console.log(adjacentElementsProduct([1])) // 1
console.log(adjacentElementsProduct([3, 6])) // 18
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])) // 21

function adjacentElementsProduct(inputArray) {
  //Here we store variables needed if array >= 2
  let calculations = [];
  let calculation = 0;
  
  //Here is what to do if we get empty input array
  if(inputArray.length === 0){
  return 0;
  }
    
  //Here is what to do if we get input array with 1 number
  else if(inputArray.length === 1){
  return inputArray[0];
  }
    
  //Here is what to do if we get input array with at least one pair of   numbers
  else if (inputArray.length >= 2){
    //loop over each pair in the array
    for(i=0;i<=inputArray.length - 1;i +=2) {
      //set our calculation variable to be product of current pair
      calculation = inputArray[i]*(inputArray[i+1]);
      //push our calculation to the calculations array
      calculations.push(calculation);
    }
    //arrange our calculations from smallest to biggest
    calculations.sort();
    //reverse the order, so biggest to smallest
    calculations.reverse();  
    //grab the biggest calculation
    return calculations[0];
  }
  
}
