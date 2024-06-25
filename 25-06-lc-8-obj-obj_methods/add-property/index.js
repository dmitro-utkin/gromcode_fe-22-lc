// objects
// add property
// read property
// filter, map, reduce

// input obj, string, value(any)
// output obj

// v1([])
function addPropertyV1(obj, key, value) {
  // put your code here
  obj[key] = value;
  return obj;
}

// // v1.1 (error)
// // function addPropertyV1(obj, key, value) {
// //   return (obj[key] = value);
// // };

// console.log(addPropertyV1(user, 'name', 'Dmitro'));
// console.log(user);

// v2(assign)
function addPropertyV2(obj, key, value) {
  // assign
  // input: obj, obj1, ..., objN
  // output: obj
  Object.assign(obj, { [key]: value }); // computed property
  // Object.assign(obj, { key: value });
  return obj;
}

// v3(
function addPropertyV3(obj, key, value) {
  // put your code here
  // assign
  // input: obj, obj1, ..., objN
  // output: obj
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

function addPropertyV5(obj, ...args) {
  console.log('args: ', args);

  const res = args.reduce((acc, el, index) => {
    if (index % 2 === 0) {
      return { ...acc, [el]: args[index + 1] };
    }
    return acc;
  }, {});
}
// rest operator

// testing
// const user = {
//   name: 'Tom',
//   height: 170,
// };

// console.log(addPropertyV4(user, 'name', 'Dmitro'));
// console.log('objecy after: ', user);

// spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

const obj = {  
  id: 1001,
  age: 17,
};

// const objCopy = { ...obj, age: 18, email: 'gmail.com' };

// console.log(objCopy);

// destructuring
// const { name, age } = obj;
// console.log(name, age);

// const { email, ...objPart } = objCopy;
// console.log(email, objPart);

// const { firstEl, ...arrRest } = [1, 2, 3, 4, 5];
// console.log(firstEl, arrRest);
// console.log(email, objPart);

const transaction = {
  value: 170,
};
addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
console.log(transaction);