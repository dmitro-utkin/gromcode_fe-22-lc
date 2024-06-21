/**
 * @param {number[]} transactions
 * @return {number}
 */
// algo v1
// 1. filter expenses
// 2. make positive
// 3. sum

// algo v2
// 1. iterate elements+
// 2. sum expenses 
// 3. make sum positive

// reduce
// DRAFT SOLUTION
// function calcExpenses(transactions) {
//   // put your code here
//   // reduce
//   // input: callback, initial value (optional), this(optional)
//   // output: anything
//   // callback
//   // input: (acc, el, index, array)
//   // output: new accumulator (anything)
  
//   const res = transactions.reduce((acc, el, index) =>{
//     // console.log('step ' + index);
//     // console.log('step ' + acc);
//     // console.log('step ' + el);
//     // +
//     // if (el < 0) {
//     //   acc += el;
//     // }

//     // return acc;
//     return el < 0 ? acc + el : acc
//   }, 0);

//   console.log('Result is', res);

//   return Math.abs(res);
// }

// // examples
// console.log(calcExpenses([25, 40, -74, 58, -100, -5])); // returns ==> 179
// calcExpenses([5000, 450]); // returns ==> 0

//  --------------------------
//  --------------------------
//  --------------------------
//  --------------------------


function calcExpenses(transactions) {
  return Math.abs(transactions.reduce((acc, el) => (el < 0 ? acc + el : acc), 0));
}

// examples
console.log(calcExpenses([25, 40, -74, 58, -100, -5])); // returns ==> 179
console.log(calcExpenses([5000, 450])); // returns ==> 0