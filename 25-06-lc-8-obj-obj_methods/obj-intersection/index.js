// input: obj1, obj2
// output: obj

// algo
// 1. create object +++
// 2. iterate firstObj. get key/value by index
// 3. compare values by key
// 4. add key/value to object

// v1
// function objIntersection(firstObj, secondObj) {
//   // put your code here
//   const result = {};

//   for (const key in firstObj) {
//     if (firstObj[key] === secondObj[key]) {
//       result[key] = firstObj[key];
//     }
//   }
//   return result;
// }

// v2
// function objIntersection(firstObj, secondObj) {
//   return Object.keys(firstObj).reduce((result, key) => {
//     if (firstObj[key] === secondObj[key]) {
//       result[key] = firstObj[key];
//     }
//     return result;
//   }, {});
// }

// v3
const objIntersection = (firstObj, secondObj) =>
  Object.keys(firstObj).reduce(
    (result, key) =>
      firstObj[key] === secondObj[key] 
        ? { ...result, [key]: firstObj[key] } 
        : result,
    {},
  );

// examples
// #1
const obj1 = { id: 1, points: 2, signature: 'saas' };
const obj2 = { id: 1, points: 5, signature: 'teewe' };
console.log(objIntersection(obj1, obj2)); // returns ==> { id: 1 }

// #2
const obj3 = { id: 1, points: 2, signature: 'eeew' };
const obj4 = { signature: 'eeew' };
console.log(objIntersection(obj3, obj4)); // returns ==> { sihnature: 'eeew' }

// #3
const obj5 = { id: 1, points: 2, signature: 'eeew' };
const obj6 = { width: 100, height: 200 };
console.log(objIntersection(obj5, obj6)); // returns ==> {}
