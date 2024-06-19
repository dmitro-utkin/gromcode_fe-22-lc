// console.log('Hello FE-22-lc');
//---------------------------------
// plan
//1. arrays methods overvion
//2. callback
//3. filter in details



//---------------------------------
//---------------------------------
//---------------------------------

// input: ?
// output: ?

// приймає масив чисел
// повертає масив відфільтрованих чисел - error!!!!!!!

// -----------------------------------
// -----------------------------------
// -----------------------------------

// //example 1
// const numbersList1 = [1, 2, 3, 4, 5];
// console.log('array before pop', numbersList1);

// // input: none (немає параметрів)
// // output: element (number) from array

// const res = numbersList1.pop();
// console.log(res);
// console.log('array after pop', numbersList1);

// -----------------------------------
// -----------------------------------
// -----------------------------------

// //example 2
// const numbersList2 = [1, 2, 3, 4, 5];
// console.log('array before pop', numbersList2);

// // input: elements (any type), .... 
// // output: array length (number)

// const res2 = numbersList2.push(6);
// console.log(res2);
// console.log('array after pop', numbersList2);

// -----------------------------------
// -----------------------------------
// -----------------------------------

// //example 3
// const numbersList3 = [1, 2, 3, 4, 5];
// console.log('array before pop', numbersList3);

// // // input: none (немає параметрів)
// // // output: element (number) from array

// const res3 = numbersList3.shift();
// console.log(res3);
// console.log('array after pop', numbersList3);

// -----------------------------------
// -----------------------------------
// -----------------------------------

// //callback function
// const numbersList4 = [1, 2, 3, 4, 5];
// console.log('array before pop', numbersList4);

// -----------------------------------
// -----------------------------------
// -----------------------------------

//filter example
// option 1
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
// // input: callback, (this)
// // output: array
// console.log('array before filter', anotherNumbersList);
// // callbac
// // input: element, index (optional), array(optional) 
// // output: boolean

// const res4 = anotherNumbersList.filter(filterCallback);

// function filterCallback(element) {
//   if (element >5) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(res4)
// console.log('array after filter', anotherNumbersList)

// // option 2
// const res4 = anotherNumbersList.filter(function (element) {
//   return element > 5
// });

// function filterCallback(element) {
//   return element > 5
// }

// // option 3
const res4 = anotherNumbersList.filter(el => el > 5);

console.log(res4);

console.log('array after filter', anotherNumbersList)