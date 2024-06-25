// input: array, array
// output: array

// algo
// 0. create empty array
// 1. iterate array
// 2. compare array values ​​with id
// 3. add key value -> true or false to new array

// v1
// function markAdmins(usersList, adminIds) {
//   // put your code here
//   const newList = [];
//   for (const item of usersList) {
//     if (adminIds.includes(item.id)) {
//       newList.push({ ...item, isAdmin: true });
//     } else {
//       newList.push({ ...item, isAdmin: false });
//     }
//   }
//   return newList;
// }

// v2
function markAdmins(usersList, adminIds) {
  // put your code here
  return usersList.map(item =>
    adminIds.includes(item.id) ? { ...item, isAdmin: true } : { ...item, isAdmin: false },
  );
}

// examples
const adminIds = ['1', '3'];
const users = [
  { id: '1', name: 'Bob' },
  { id: '2', name: 'Tom' },
  { id: '3', name: 'Sam' },
  { id: '4', name: 'Tad' },
];
console.log(markAdmins(users, adminIds));
// console.log(users);

// result:
// [
//    { id: '1', isAdmin: true, name: 'Bob' },
//    { id: '2', isAdmin: false, name: 'Tom' },
//    { id: '3', isAdmin: true, name: 'Sam' },
//    { id: '4', isAdmin: false, name: 'Tad' }
// ];
