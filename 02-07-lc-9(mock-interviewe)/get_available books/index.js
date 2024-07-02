// 'use strict';

// const booksStorage = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     booksCount: 5,
//     bookingsCount: 10,
//   },
//   {
//     author: 'Bill Gates',
//     title: 'Slow Horses',
//     booksCount: 12,
//     bookingsCount: 21,
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     booksCount: 0,
//     bookingsCount: 5,
//   },
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     booksCount: 2,
//     bookingsCount: 7,
//   },
//   {
//     author: 'Taras Shevchenko',
//     title: 'Kobzar',
//     booksCount: 0,
//     bookingsCount: 10,
//   },
// ];

// // algo
// // iterate array
// // find author
// // if booksCount > 0
// // add to array
// // return array

// // v1
// // function getAvailableBooks(author) {
// //   let availableBooks = [];

// //   for (let book of booksStorage) {
// //     if ((!author || book.author === author) && book.booksCount > 0) {
// //       availableBooks.push({
// //         author: book.author,
// //         title: book.title,
// //       });
// //     }
// //   }

// //   return availableBooks;
// // }

// // v2
// function getAvailableBooks(author) {
//   return booksStorage
//     .filter(book => (!author || book.author === author) && book.booksCount > 0)
//     .map(book => ({ author: book.author, title: book.title }));
// }

// // examples
// // #1
// console.log(getAvailableBooks());
// // ===> returns
// // [
// //   {
// //     author: 'Bill Gates',
// //     title: 'The Road Ahead',
// //   },
// //   {
// //     author: 'Bill Gates',
// //     title: 'Slow Horses',
// //   },
// //   {
// //     author: 'Suzanne Collins',
// //     title: 'Mockingjay: The Final Book of The Hunger Games',
// //   },
// // ];

// // #2
// console.log(getAvailableBooks('Taras Shevchenko'));
// // ===> returns
// // [
// //   {
// //     author: 'Taras Shevchenko',
// //     title: 'Kobzar',
// //   },
// // ];

// console.log(getAvailableBooks('Suzanne Collins'));