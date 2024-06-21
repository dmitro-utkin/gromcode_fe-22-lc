// algo 
// 0. create empty array
// 1. iterate array with for
// 2. apply callback for each element
// 3. if true -> add to new array

// input: array, callback
// output: array

// callback
// input: element, index, array
// output: boolean
const filterArrayElements = (arr, callback) => {
  // put you code here
  const res = [];
  for(let i = 0; i < arr.length; i += 1) {
    const el = arr[i];
    if (callback(arr[i], i, arr)) {
      res.push(arr[i]);
    }
};

  return res;
};

// testing
const test = [1, 10, 5, 7, 20, 44]
console.log(filterArrayElements(test, (el, index) => el > 1 && el));