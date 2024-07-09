// const arr = [1, 2];
// console.log(arr);

// OOP
// functional programming

import { User } from './user.js';
import { Student } from './student.js';

// const user = new User(1, 'John', 'Doe');
// console.log(user);
// user.isAdmin = true;
// user.setIsAdmin = true;
// user.setIsAdmin = 100;
// console.log(user.getIsAdmin);
// console.log(user);

// console.log(user.getIsAdmin);

// console.log(user.getId);

// console.log(user.getFullName());

// ------

// const student = new Student(2, 'Jane', 'Doe', 'FE', 100);
// console.log(student);
// student.getFullName();

const getTopStudent = students => {
  // v 1
  // const res = students
  //   .filter(student => student.getIsActive)
  //   .reduce((topStudent, curStudent) => {
  //     if (curStudent.points > topStudent.points) {
  //       return curStudent;
  //     }
  //     return topStudent;
  //   }, students[0]); // initial value


  //const id = res.id;
  //const firstName = res.firstName;
  //const lastName = res.lastName;
  // const { id, firstName, lastName } = res;
  // return { id, firstName, lastName };

  const { id, firstName, lastName } = students
    .filter(student => student.getIsActive)
    .reduce((topStudent, curStudent) => {
      if (curStudent.points > topStudent.points) {
        return curStudent;
      }
      return topStudent;
    }, students[0]); // initial value

  return { id, firstName, lastName };
  // return res.getFullName();
};

// testing

// const student1 = new Student(1, 'John', 'Doe', 'FE', 100);
// const student2 = new Student(2, 'Ann', 'Doe', 'FE', 100);

// console.log(getTopStudent([student1, student2]));

// examples

const user1 = new User(1, 'John', 'Doe');
const user2 = new User(2, 'Jane', 'Doe');
const user3 = new User(3, 'Jim', 'Beam');

console.log(user1.getFullName()); // ===> John Doe
console.log(user2.getFullName()); // ===> Jane Doe
console.log(user3.getFullName()); // ===> Jim Beam

const student1 = new Student(1, 'Alice', 'Johnson', 'Math', 85);
const student2 = new Student(2, 'Bob', 'Smith', 'Physics', 92);
const student3 = new Student(3, 'Carol', 'Williams', 'Chemistry', 78);

// student2.getIsActive = false;
const students = [student1, student2, student3];

console.log(getTopStudent(students)); // ===> { id: 1, firstName: 'Alice', lastName: 'Johnson' }

