// Diff Two ArraysPassed
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++){
    if (arr2.indexOf(arr1[i]) < 0) {
      newArr.push(arr1[i])
    }    
  }

  for (let j = 0; j < arr2.length; j++){
    if (arr1.indexOf(arr2[j]) < 0) {
      newArr.push(arr2[j])
    }    
  }

  return newArr;

}

module.exports = diffArray