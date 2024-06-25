// algo 
// 1. create object +++
// 2. iterate keyList. get key/value by index +++
// 3. add key/value to object

// v1
// function buildObject(keysList, valuesList) {
//   // put you code here
//   let obj = {};

//   for (let index = 0; index < keysList.length; index += 1) {
//     const key = keysList[index];
//     const value = valuesList[index];
//     obj = { ...obj, [key]: value };
//   }

//   return obj;
// }

// v2
// function buildObject(keysList, valuesList) {
//   // put you code here
//   return keysList.reduce((obj, key, index) => {
//     const value = valuesList[index];
//     return { ...obj, [key]: valuesList[index] };
//   }, {});
// }

// v3
function buildObject(keysList, valuesList) {
  // put you code here
  return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Vasyl', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }

const keys1 = ['name', 'address', 'age'];
const values1 = ['Ivan', 'Ukraine', 40];
const result1 = buildObject(keys, values); // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }

const keys2 = ['name', 'address', 'age'];
const values2 = ['Pavlo', 'Ukraine', 55];
const result2 = buildObject(keys, values); // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }

console.log(result);
console.log(result1);
console.log(result2);