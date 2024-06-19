/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */


// input: number, number, callback
// output: undefined
// algo
// 1/ iterate from to & calculate sum
// 2/ call callback
function sum(from, to, resolver) {
  // put your code here
  let res = 0;

  for (let index = from; index <= to; index += 1) {
    res += index;
  }

  // resolver(res);
  console.log('Result is', res);
  // if(/**/) {
  //   console.log('Result is', res);
  // }
}

// input: number
// output: undefined
function printResult(res) {
  // put your code here
  console.log('Result is', res);
};
// function sentEmail(res) {
//   // put your code here
//   // emailServices.send(res)
// };
// function printResult(res) {
//   // put your code here
//   // service.save(res)
// };

// testing
sum(1, 10, printResult);
sum(1, "10", printResult);
sum(null, "10", printResult);
sum(undefined, "10", printResult);
sum(undefined, 2, printResult);