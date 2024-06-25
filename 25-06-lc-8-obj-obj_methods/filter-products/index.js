// input: array
// output: filtered array

// algo
// 0. create empty array
// 1. iterate array
// 2. add a condition to filter
// 3. if true -> add to new array

// v1
// function filterProducts(products, filterObj) {
//   // put your code here
//   const filteredProducts = [];
//   for (const item of products) {
//     if (
//       Object.entries(filterObj).every(([key, value]) => {
//         if (key === 'price' && item[key] <= value) {
//           return true;
//         }
//         return item[key] === value;
//       })
//     ) {
//       filteredProducts.push(item);
//     }
//   }
//   return filteredProducts;
// }

// v2
function filterProducts(products, filterObj) {
  // put your code here
  return products.filter(item =>
    Object.entries(filterObj).every(([key, value]) =>
      key === 'price' ? item[key] <= value : item[key] === value,
    ),
  );
}

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    city: 'New York',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 599.99,
    city: 'Los Angeles',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Desk Chair',
    price: 89.99,
    city: 'Chicago',
    category: 'Furniture',
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: 49.99,
    city: 'Houston',
    category: 'Home Appliances',
  },
  {
    id: 5,
    name: 'Book',
    price: 19.99,
    city: 'New York',
    category: 'Books',
  },
  {
    id: 6,
    name: 'T-shirt',
    price: 14.99,
    city: 'Phoenix',
    category: 'Clothing',
  },
  {
    id: 7,
    name: 'Bicycle',
    price: 299.99,
    city: 'San Antonio',
    category: 'Sports',
  },
];

// examples
// #1
console.log(filterProducts(products, { city: 'New York' }));
// returns ==>
// [
//   { id: 1, name: 'Laptop', price: 999.99, city: 'New York', category: 'Electronics' },
//   { id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' },
// ];

// #2
console.log(filterProducts(products, { price: 50 }));
// returns ==>
// [
//   { id: 4, name: 'Coffee Maker', price: 49.99, city: 'Houston', category: 'Home Appliances' },
//   { id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' },
//   { id: 6, name: 'T-shirt', price: 14.99, city: 'Phoenix', category: 'Clothing' },
// ];

// #3
console.log(filterProducts(products, { city: 'New York', price: 50 }));
// returns ==>
// [{ id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' }];

// console.log(filterProducts(products, {}));
// console.log(products);
