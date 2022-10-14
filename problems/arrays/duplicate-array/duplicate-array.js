// 1) Code a function named duplicate that
//    accepts an array as its only argument and
//    returns a new array that contains the 
//    original elements followed by duplicates
//    of those elements.

//    For example:

//      duplicate(['🍔', '🍟', '🍺'])

//      would return -->
//      ['🍔', '🍟', '🍺', '🍔', '🍟', '🍺']

// 2) Return a new array, do not modify the 
//    array passed to the function.

// ------------------------------------------*/

// Write the function here....

//OPTION 1
//define function that accepts input array
const duplicate = (array) => {
  //define new array to store answer
  let answer = [];
  //inside functon, loop 1 goes over the array and push each item to new array
  for(i=0; i<array.length; i++) {
    answer.push(array[i])
  }
  //loop 2 also goes over the array and push each item to new array
  for(i=0; i<array.length; i++) {
    answer.push(array[i])
  }
  return answer;
  
  //OPTION 2 -- much faster
//   const newArray = array.concat(array);
//   return newArray;
}



/*------------------------------------------

Running the console log below should result in the 
following output:

['🍕', '🥗', '🍷', '🍰', '🍕', '🥗', '🍷', '🍰']

------------------------------------------*/

console.log(duplicate(['🍕', '🥗', '🍷', '🍰']));