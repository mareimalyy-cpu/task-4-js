// Solve This Problems with Higher Order Functions (HOF)





// 1- calculate and print the sum

// const numbers = [10, 20, 30, 40, 50];

// Output: 150


const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);



// -------------------------------

// 2- Create a new array where every number is doubled.

// const numbers = [1, 2, 3, 4, 5];

// Output: [2, 4, 6, 8, 10]


const num = [1, 2, 3, 4, 5];

const doubledNumbers = num.map((num) => num * 2);

console.log(doubledNumbers);

// ==============================

// 3- Create a new array containing only the names.

// const users = [
//   { id: 1, name: "Ahmed", age: 22 },
//   { id: 2, name: "Mona", age: 25 },
//   { id: 3, name: "Ali", age: 20 }
// ];

// Output: ["Ahmed", "Mona", "Ali"]


const users = [
  { id: 1, name: "Ahmed", age: 22 },
  { id: 2, name: "Mona", age: 25 },
  { id: 3, name: "Ali", age: 20 }
];

const names = users.map((user) => user.name);

console.log(names);

// ============================


// 4- Create a new array containing only even numbers.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];


// Output: [2, 4, 6, 8]


const n = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = n.filter((num) => num % 2 === 0);

console.log(evenNumbers);


// -------------------------------

// 5- Return users whose age is 18 or greater.

// const users = [
//   { name: "Ahmed", age: 17 },
//   { name: "Mona", age: 22 },
//   { name: "Ali", age: 15 },
//   { name: "Sara", age: 30 }
// ];


// Output: [
//   { name: "Mona", age: 22 },
//   { name: "Sara", age: 30 }
// ]

const user = [
  { name: "Ahmed", age: 17 },
  { name: "Mona", age: 22 },
  { name: "Ali", age: 15 },
  { name: "Sara", age: 30 }
];
const adults = user.filter((user) => user.age >= 18);
console.log(adults);

// ===========================

// 6- Find the product with the name "Phone".

// const products = [
//   { id: 1, name: "Laptop", price: 30000 },
//   { id: 2, name: "Phone", price: 15000 },
//   { id: 3, name: "Tablet", price: 10000 }
// ];


// Output: { id: 2, name: "Phone", price: 15000 }

const products = [
  { id: 1, name: "Laptop", price: 30000 },
  { id: 2, name: "Phone", price: 15000 },
  { id: 3, name: "Tablet", price: 10000 }
];
const product = products.find((item) => item.name === "Phone");
console.log(product);

// ===================================
// 7- Check that all products has stock.

// const products = [
//   { name: "Laptop", stock: 0 },
//   { name: "Phone", stock: 0 },
//   { name: "Tablet", stock: 5 }
// ];


// Output: true

const productStor= [
  { name: "Laptop", stock: 0 },
  { name: "Phone", stock: 0 },
  { name: "Tablet", stock: 5 }
];

const result = productStor.every((product) => product.stock > 0);

console.log(result);

// ===========================


// 8- Calculate the cart total price.

// const cart = [
//   { name: "Laptop", price: 30000 },
//   { name: "Phone", price: 15000 },
//   { name: "Tablet", price: 10000 }
// ];


// Output: 55000

const cart = [
  { name: "Laptop", price: 30000 },
  { name: "Phone", price: 15000 },
  { name: "Tablet", price: 10000 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total);






