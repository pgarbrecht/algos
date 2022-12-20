// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

function binarySearch(array, target) {
  //check if array does not have the target
    if (array.includes(target) === false) {
      //and return -1 as answer
      return -1
    } else { //otherwise,
      //make copy of array with spread operator
      let copyArray = [...array]
      //create variable for midpoint of copy array and variable to track result
      let mid = Math.floor(copyArray.length / 2)
      let result = null
      //loop until you have a result
      while (result === null) {
        // if target is less than midpoint,
        if (target < copyArray[mid]) {
          // cut the copy array in left half
          copyArray = copyArray.slice(0, mid)
          mid = Math.floor(copyArray.length / 2)
        } 
        //otherwise cut in right half
        else if (target > copyArray[mid]) {
          copyArray = copyArray.slice(mid)
          mid = Math.floor(copyArray.length / 2)
          //when we are done halving the copy array and get the target, we set our answer as that value
        } else if (target === copyArray[mid]) { 
          result = array.indexOf(copyArray[mid])
        }
      }
      //return the answer
      return result
    }
  }