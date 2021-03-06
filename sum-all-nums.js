// Sum All Numbers in a RangePassed
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  const sum = [];
  const order = arr.sort((a, b) => a - b)
  for (let i = order[0]; i <= order[1]; i++){
    sum.push(i)
  }
  return sum.reduce((a, b) => a + b);
}

module.exports = sumAll