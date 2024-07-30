// console.log("Hello FE-22-lc");

// 'use strict';

// /**
//  * @param {object} firstObj
//  * @param {object} secondObj
//  * @return {object}
//  */
// function objIntersection(firstObj, secondObj) {
//   // put your code here
// }

// // examples
// #1
// const obj1 = { id: 1, points: 2, signature: 'saas' };
// const obj2 = { id: 1, points: 5, signature: 'teewe' };
// console.log(objIntersection(obj1, obj2)); // returns ==> { id: 1 }

// // #2
// const obj3 = { id: 1, points: 2, signature: 'eeew' };
// const obj4 = { signature: 'eeew' };
// console.log(objIntersection(obj3, obj4)); // returns ==> { sihnature: 'eeew' }

// // #3
// const obj5 = { id: 1, points: 2, signature: 'eeew' };
// const obj6 = { width: 100, height: 200 };
// console.log(objIntersection(obj5, obj6)); // returns ==> {}

// input: obj1, obj2
// output: obj

// algo
// 1. create object +++
// 2. iterate firstObj. get key/value by index
// 3. compare values by key
// 4. add key/value to object

// v1
// function objIntersection(firstObj, secondObj) {
//   const result = {};
//   for (const key in firstObj) {
//     if(firstObj[key] === secondObj[key]) {
//       result[key] = firstObj[key];
//     }
//   }
//   return result;
// }

// v2
// function objIntersection(firstObj, secondObj) {
//   return Object.keys(firstObj).reduce((result, key) => {
//     if(firstObj[key] === secondObj[key]) {
//       result[key] = firstObj[key];
//     }
//     return result;
//   }, {});
// }

// v3
// function objIntersection(firstObj, secondObj) {
//   return Object.keys(firstObj).reduce((commonObj, key) => {
//     if (firstObj[key] === secondObj[key]) {
//       return {
//         ...commonObj,
//         [key]: firstObj[key],
//       };
//     }
//     return commonObj;
//   }, {});
// }

// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------

// v1
// function calcSalesByCompany(data, year) {
//   let result = {};

//   for (let index = 0; index < data.length; index += 1) {
//     if (data[index].year === year) {
//       if (!result[data[index].company]) {
//         result[data[index].company] = 0;
//       }
//       result[data[index].company] += data[index].salesCount;
//     }
//   }
//   return result;
// }

// v2
// function calcSalesByCompany(data, year) {
//   const salesByCompany = {};

//   const filteredData = year ? data.filter(entry => entry.year === year) : data;

// Для кожного об'єкта вводу в filtreddata отримуємо значення компанії
// (назва компанії) і salesCount (кількість продажів).
// Якщо salesByCompany вже містить запис для поточної компанії (salesByCompany[company]
// не одно undefined), то збільшуємо існуюче значення на salesCount. В іншому випадку
// (якщо компанія зустрічається вперше), встановлюємо значення salesCount.
// filteredData.forEach(entry => {
//   const { company, salesCount } = entry;
//   if (salesByCompany[company]) {
//     salesByCompany[company] += salesCount;
//   } else {
//     salesByCompany[company] = salesCount;
//   }
// });
// }

// v3
// function calcSalesByCompany(data, year) {
//   return data.reduce((acc, entry) => {
//     const { company, salesCount } = entry;
//     if (year && year !== entry.year) {
//       return acc;
//     }
//     if (acc[company]) {
//       acc[company] += salesCount;
//     } else {
//       acc[company] = salesCount;
//     }
//     return acc
//   }, {});
// };

// // examples
// const data = [
//   { company: 'Honda', model: 'Civic', salesCount: 5000, month: 'Mar', year: 2020 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 84456, month: 'Jun', year: 2020 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 100520, month: 'Jan', year: 2021 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 90100, month: 'Mar', year: 2021 },
//   { company: 'Honda', model: 'Accord', salesCount: 113265, month: 'Dec', year: 2021 },
//   { company: 'Honda', model: 'Civic', salesCount: 105749, month: 'Jul', year: 2021 },
//   { company: 'Ford', model: 'Fusion', salesCount: 53666, month: 'Jan', year: 2021 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 90100, month: 'Jan', year: 2022 },
//   { company: 'Ford', model: 'Focus', salesCount: 90100, month: 'Dec', year: 2022 },
//   { company: 'Ford', model: 'Focus', salesCount: 90100, month: 'Dec', year: 2022 },
//   { company: 'Ford', model: 'Mustang', salesCount: 113953, month: 'Sep', year: 2022 },
//   { company: 'Honda', model: 'Civic', salesCount: 70496, month: 'Feb', year: 2022 },
//   { company: 'Toyota', model: 'RAV4', salesCount: 64948, month: 'Feb', year: 2022 },
//   { company: 'Nissan', model: 'Leaf', salesCount: 92658, month: 'Feb', year: 2022 },
//   { company: 'Toyota', model: 'Camry', salesCount: 82038, month: 'May', year: 2023 },
//   { company: 'Toyota', model: 'RAV4', salesCount: 84580, month: 'Nov', year: 2023 },
// ];

// console.log(calcSalesByCompany(data, 2021)); // returns ==> { Toyota: 190620, Honda: 219014, Ford: 53666 }
// console.log(calcSalesByCompany(data)); // returns ==> { Honda: 294510, Toyota: 596742, Ford: 347819, Nissan: 92658 }

// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------

// v1
// function calcSalesByCompany(data, year) {
//   // put your code here
//   const salesCompany = data.reduce((acc, el) => {
//     if (!year || el.year === year) {
//       const { company, salesCount } = el;
//       if (!acc[company]) {
//         acc[company] = 0;
//       }
//       acc[company] += salesCount;
//     }
//     return acc;
//   }, {});

//   return Object.entries(salesCompany).map(([company, salesCount]) => ({ company, salesCount }));
// }

// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------

// 'use strict';

// /**
//  * @param {object[]} data
//  * @param {number[]} userId
//  * @return {string[]}
// //  */
// function getUserEndpoints(data, userId) {
//   if (!userId) {
//     return null;
//   }

//   return data
//     .filter(el => el.id === userId)
//     .map(el => {
//       const endpoint = el.endpoint.replace('{userId}', userId);
//       return endpoint;
//     });
// }

// // examples
// console.log(getUserEndpoints([
//   { id: 1001, endpoint: '/api/users/{userId}/data' },
//   { id: 4422, endpoint: '/api/users/data' },
//   { id: 1001, endpoint: '/api/users/location' },
//   { id: 9999, endpoint: '/api/users/{userId}/validation' },
//   { id: 4422, endpoint: '/api/users/{userId}/validation' },
// ], 4422)); // ===> ['/api/users/data', '/api/users/4422/validation']

//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

/**
 * @param {number[]} ids
 * @return {number[]}
 */

// v1
// function findMissingIds(ids) {
//   const result = [];
//   for (let i = 0; i < ids.length - 1; i += 1) {
//     const num = ids[i + 1] - ids[i];
//     if (num > 1) {
//       for (let j = 1; j < num; j += 1) {
//         result.push(ids[i] + j);
//       }
//     }
//   }
//   return result;
// }

// v2
function findMissingIds(ids) {
  const result = [];
  const sortIds = ids.toSorted((a, b) => a - b);
  const firstEl = sortIds[0];
  const lastEl = sortIds[sortIds.length - 1];

  for (let i = firstEl; i <= lastEl; i += 1) {
    if (!sortIds.includes(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log(findMissingIds([1, 2, 4, 5])); // ===> [3]
console.log(findMissingIds([10, 13, 14])); // ===> [11, 12]
console.log(findMissingIds([14, 17, 18, 20])); // ===> [ 15, 16, 19 ]
