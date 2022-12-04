// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

function binarySearch(array, target) {
    if (array.includes(target) === false) {
      return -1
    } else {
      let copyArray = [...array]
      let mid = Math.floor(copyArray.length / 2)
      let result = null
      while (result === null) {
        if (target < copyArray[mid]) {
          copyArray = copyArray.slice(0, mid)
          mid = Math.floor(copyArray.length / 2)
        } 
        else if (target > copyArray[mid]) {
          copyArray = copyArray.slice(mid)
          mid = Math.floor(copyArray.length / 2)
        } else if (target === copyArray[mid]) { 
          result = array.indexOf(copyArray[mid])
        }
      }
      return result
    }
  }