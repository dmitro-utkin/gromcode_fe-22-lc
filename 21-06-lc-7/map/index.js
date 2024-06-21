/**
 * @param {number[]} results
 * @return {string[]}
 */

// v1
function getStatuses(results) {
  // validate
  // algo v1
  // 1. filter not valid elem +++
  // 2. if length > 0 - not valid
  // const res = results.filter(el => el < 0 || el > 100);

  // console.log('filter res ', res);

  // v1
  if (results.filter(el => el < 0 || el > 100).length > 0) {
    return null;
  }

  // v2
  // if (results.some(el => el < 0 || el > 100).length > 0) {
  //   return null;
  // }

  // input: callback, this (optional)
  // output: array

  // callback
  // input: element, index (optional), array (optional)
  // output: new element

  // v1
  // return results.map(function (el, index, array) {
  //   if (el >= 90) {
  //     return 'Passed';
  //   } else {
  //     return 'Failed';
  //   }
  // });

  // const newArr = results.map(function (el, index, array) {
  //   if (el >= 90) {
  //     return 'Passed';
  //   } else {
  //     return 'Failed';
  //   }
  // });

  // return newArr;

  // v2
  // const newArr = results.map(function (el, index, array) {
  //   return el >= 90 ? 'Passed' : 'Failed';
  // });
  // return newArr;

  // const newArr = results.map((el, index, array) => (el >= 90 ? 'Passed' : 'Failed'));
  // return newArr;

  return results.map(el => (el >= 90 ? 'Passed' : 'Failed'));
}

// examples
console.log(getStatuses([25, 40, 74, 58, 100, 5])); // returns ==> ['Failed', 'Failed', 'Failed', 'Failed', 'Passed', 'Failed']
console.log(getStatuses([1000, 450])); // returns ==> null
console.log(getStatuses([])); // returns ==> []
