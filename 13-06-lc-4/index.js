// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

//  grocery
// 1. get nearest grocery location
// 2. plan your route
// 3. go to the shop
// 4. plan your route back

// algo
// 1. iterate from 1 to num
// 2. check if N is prime
// 2.1 iterate from 2 to N
// 2.2 check if N % i === 0 --> is not prime
// 2.3 if counter > 0 -> is prime
// 3. if prime -> print it

function isPrime(n) {
  for (let index = 2; index < n; index += 1) {
    if (n % index === 0) {
      return false;
    }
  }
  return true;
}

// input: number
// output: undefined
function getPrimes(num) {
  for (let n = 2; n <= num; n += 1) {
    if (isPrime(n)) {
      console.log(n);
    }
  }
}

getPrimes(10);

// algo #1
// 7
// 7 % 2; 7 % 3; 7 % 4; 7 % 5; 7 % 6 -> is prise

// 6
// 6 % 2; 6 % 3; 6 % 4; 6 % 5 -> is not prime

// algo #2
// counter = 0;
// 7
// 7 % 2; 7 % 3; 7 % 4; 7 % 5; 7 % 6
// if (7 % i === 0) counter ++;
// if(counter > 0) -> is prime