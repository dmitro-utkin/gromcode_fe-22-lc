// function logIn() {
//   // logic
//   console.log('User with ID ${this.id} is logged in');
// };

// function logOut() {
//   // logic
//   console.log('User with ID ${this.id} is logged out');
// };

// .. ------
// class Auth {
//   logIn() {
//     // logic
//     console.log('User with ID ${this.id} is logged in');
//   }

//   logOut() {
//     // logic
//     console.log('User with ID ${this.id} is logged out');
//   }
// }


// logIn();

// const context = { id: 42 };
// const logInBinded = logIn.bind(context);
// logInBinded();

// const context1 = { id: 55 };
// const logInBinded1 = logOut.bind(context);
// logInBinded();

// this - це об'єкт в якому використовується функція
// this - потрібен для передачі даних у фун-ю


// class User {
//   constructor(id) {
//     this.id = id;
//     this.isLogged = false;
//   }
//   logIn() {
//     // logic
//     console.log(`User with ID ${this.id} is logged in`);
//   }

//   logOut() {
//     // logic
//     console.log(`User with ID ${this.id} is logged out`);
//   }
// }

// const user = new User(42);
// console.log(user.isLogged);

// user.logIn();

// console.log(user.isLogged);


// -----------------------------

// lose context #1
// const testUser = {
//   id: 100,
//   isLogged: false,

//   logIn() {
//     // logic
//     console.log(`User with ID ${this.id} is logged in`);
//   },
// };

// console.log(testUser.isLogged);
// // testUser.logIn();
// const loginFunc = testUser.logIn;
// loginFunc();
// console.log(testUser.isLogged);

