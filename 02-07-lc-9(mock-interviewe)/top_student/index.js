// algo
// 1. sort students by points
// 2. return top student

// v 1
// function getTopStudent(studentsData) {
//   let student = {};
//   let topStudent = studentsData[0];

//   for (let i = 1; i < studentsData.length; i += 1) {
//     if (studentsData[i].points > topStudent.points) {
//       topStudent = studentsData[i];
//       student = {
//         id: topStudent.id,
//         firstName: topStudent.firstName,
//         lastName: topStudent.lastName,
//       };
//     }
//   }

//   return topStudent;
// }

// v 2
function getTopStudent(studentsData) {
  let student = {};

  studentsData.sort((a, b) => b.points - a.points);
  student = studentsData[0];
  return student;
}

// examples
const students = [
  { id: 1, firstName: 'Ivan', lastName: 'Ivanov', points: 95 },
  { id: 2, firstName: 'Petro', lastName: 'Petrov', points: 85 },
  { id: 3, firstName: 'Anna', lastName: 'Annikova', points: 98 },
  { id: 4, firstName: 'Svitlana', lastName: 'Svitlichna', points: 91 },
  { id: 5, firstName: 'Mykola', lastName: 'Mykolenko', points: 88 },
];
const students1 = [
  { id: 1, firstName: 'Ivan', lastName: 'Ivanov', points: 95 },
  { id: 2, firstName: 'Petro', lastName: 'Petrov', points: 100 },
  { id: 3, firstName: 'Anna', lastName: 'Annikova', points: 98 },
  { id: 4, firstName: 'Svitlana', lastName: 'Svitlichna', points: 91 },
  { id: 5, firstName: 'Mykola', lastName: 'Mykolenko', points: 88 },
];
const students2 = [
  { id: 1, firstName: 'Ivan', lastName: 'Ivanov', points: 95 },
  { id: 2, firstName: 'Petro', lastName: 'Petrov', points: 85 },
  { id: 3, firstName: 'Anna', lastName: 'Annikova', points: 98 },
  { id: 4, firstName: 'Svitlana', lastName: 'Svitlichna', points: 100 },
  { id: 5, firstName: 'Mykola', lastName: 'Mykolenko', points: 88 },
];
console.log(getTopStudent(students)); // returns { id: 3, firstName: 'Anna', lastName: 'Annikova' }
console.log(getTopStudent(students1)); // returns { id: 3, firstName: 'Anna', lastName: 'Annikova' }
console.log(getTopStudent(students2)); // returns { id: 3, firstName: 'Anna', lastName: 'Annikova' }
