/*

A collection of positive integers can be represented by rows of beads in non-increasing order, each row having the corresponding number of beads. The rows and columns of the resulting bead representation can then be flipped, to form its conjugate representation. 

---Example---
Collection of positive integers
{ 5, 3, 1 } 

Bead representation
ooooo
ooo
o

Conjugate bead representation
ooo
oo
oo
o
o

Conjugate collection og integers
{ 3, 2, 2, 1, 1 }
---End example---

Write a program to obtain the conjugate of a collection of positive integers.

*/

// Add your test case here
let collectionPositiveIntegers = [5, 3, 1]
console.log('Here is our collection of positive integers:', collectionPositiveIntegers)

// Step 1: We should create a matrix from input array
let beadRepresentation = []
//loop over input array, add arrays inside with 'o' for length of that number
for (let i = 0; i < collectionPositiveIntegers.length; i++) {
  beadRepresentation.push([])
  for (let j = 0; j < collectionPositiveIntegers[i]; j++){
    beadRepresentation[i].push('o')
  }
}
console.log('Here is the bead representation:', beadRepresentation);

// Step 2: Then transpose the matrix (aka flip it)
let conjugateBeadRepresentation = [];
 for (let i = 0; i < beadRepresentation[0].length; i++) {
    const column = []
    for (let j = 0; j < beadRepresentation.length; j++) {
      //could add thing here not push if A[j][i] is != undefined
      if(beadRepresentation[j][i] != undefined){
      column.push(beadRepresentation[j][i]);
      }
    }
    conjugateBeadRepresentation.push(column)
 }
 console.log('Here is the conjugate bead representation:', conjugateBeadRepresentation)

// Step 3: convert matrix back into the answer array
let conjugateCollection = []
//loop over conjugateBeadRepresentation[i] and push length of the array to conjugate collection
for(i=0; i<conjugateBeadRepresentation.length; i++){
  conjugateCollection.push(conjugateBeadRepresentation[i].length)
}
console.log('Here is the completed conjugate collection:', conjugateCollection)