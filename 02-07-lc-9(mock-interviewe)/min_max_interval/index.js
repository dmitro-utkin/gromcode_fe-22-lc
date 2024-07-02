'use strict';

/**
 * @param {number[]} amount
 * @return {number[]}
 */

// algo
// 0. create empty array
// 1. iterate array elem
// 2. find min number and add to the array
// 3. find max num and add to the array
// return new array

// v1
// const getInterval = numbers => {
//   const min = Math.min(...numbers);
//   const max = Math.max(...numbers);
//   return [min, max];
// }

// v2
function getInterval(numbers) {
  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return [min, max];
}

// examples
console.log(getInterval([1, 50, 0, 90, 5])); // [0, 90]
console.log(getInterval([-10, -2, -5, -20, -3])); // [-20, -2]
console.log(getInterval([100, 200, 300, 400, -500])); // [-500, 400]