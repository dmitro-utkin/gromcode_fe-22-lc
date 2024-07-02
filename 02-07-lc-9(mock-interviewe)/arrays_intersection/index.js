// v1
// function intersection(firstArr, secondArr) {
//   return firstArr.filter((el) => secondArr.includes(el));
// }

// v2
// function intersection(firstArr, secondArr) {
//   let res = [];
//   for (let i = 0; i < firstArr.length; i += 1) {
//     if (secondArr.includes(firstArr[i])) {
//       res.push(firstArr[i]);
//     }
//   }
//   return res;
// }

// v3
// const intersection = (firstArr, secondArr) => {
// const newArray = firstArr.reduce((acc, el) => {
//     if (secondArr.includes(el)) {
//       acc.push(el);
//     }
//     return acc;
//   }, []);

//   return newArray;
// }
// examples
// console.log(intersection([1, 2, 3], [2, 3, 4, 5])); // returns ==> [2, 3]
// console.log(intersection([4, 8, -1], [1, 2])); // returns ==> []
// console.log(intersection([0, 2], [1, 2])); // returns ==> [2]
