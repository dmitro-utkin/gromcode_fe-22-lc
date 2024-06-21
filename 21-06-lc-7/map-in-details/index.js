// algo
// 0. create empty array
// 1. iterate array with for
// 2. apply callback for each element
// 3. add to new array

// map
// input: callback, this (optional), index (optional), array (optional)
// output: array

// callback
// input: element, index (optional), array (optional)
// output: new element

// code

const mapArrayElements = function (arr, callback) {
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    res.push(callback(arr[index], index, arr));
  }
  return res;
};

// testing
const test1 = [1, 2, 3, 4, 5];
const test2 = ['qwerty', 'asdfgh', 'zxcvbn'];

console.log(mapArrayElements(test1, el => el));
console.log(mapArrayElements(test1, el => el + 1));
console.log(mapArrayElements(test2, el => el));
console.log(mapArrayElements(test2, el => el.slice(0, 3)));

console.log(test2);