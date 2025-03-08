//1. Variables
//Variables store data values that can be used later.

let name = "Adnan";
// console.log(name);  // Output: Adnan


//2. Data Types
//JavaScript has multiple data types, including string, number, boolean, object, and undefined.

let age = 25;  // number
// let isStudent = true;  // boolean

//3. Functions
//Functions are reusable blocks of code.

function greet() {
    // console.log("Hello, World!");
  }
  greet();  // Output: Hello, World!

//4. Objects
//Objects store properties and methods.

let car = {
    brand: "Tesla",
    model: "Model 3"
  };
  // console.log(car.brand);  // Output: Tesla
  
//5. Arrays
//Arrays store multiple values in a single variable.

let fruits = ["apple", "banana", "orange"];
// console.log(fruits[1]);  // Output: banana

//6. Conditionals
//Conditionals execute code based on conditions.

let score = 85;
if (score > 80) {
  // console.log("Great Job!");
}  // Output: Great Job!

//7. Loops
//Loops repeat a block of code.

for (let i = 0; i < 3; i++) {
    // console.log(i);
  }
  // Output: 0, 1, 2

 //8. Arrow Functions
//Arrow functions provide a shorter syntax for writing functions. 

const add = (a, b) => a + b;
// console.log(add(2, 3));  // Output: 5

  
//9. Promises
//Promises handle asynchronous operations.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
  });
  promise.then(result => console.log(result));  // Output: Success!

//10. Async/Await
//Async/await makes working with promises simpler.    

async function fetchData() {
    let result = await promise;
    // console.log(result);
  }
  fetchData();  // Output: Success!

//11. map()
//Creates a new array by applying a function to each element of an array.

let numbers = [1, 2, 3];
let doubled = numbers.map((num)=>{
    return num*2
});
// console.log(doubled);  // Output: [2, 4, 6]

//12. filter()
//Creates a new array with elements that pass a test (return true).

let number = [1, 2, 3, 4];
let evenNumbers = number.filter(num => num % 2 === 0);
// console.log(evenNumbers);  // Output: [2, 4]

//13. forEach()
//Executes a function once for each array element.

let fruitss = ["apple", "banana", "orange"];
fruitss.forEach(fruit => console.log(fruit));
// Output: apple, banana, orange

//14. Template Literals
//Template literals allow embedding variables in strings using backticks (`) and ${}.

let firstName = "Adnan";
// console.log(`Hello, ${firstName}!`);  // Output: Hello, Adnan!

//15, Destructuring
//Destructuring allows you to extract values from arrays or objects.

let [a, b] = [1, 2];
// console.log(a);  // Output: 1


let {names, ages} = {names: "John", ages: 30};
// console.log(names);  // Output: John

//16. Spread Operator
//The spread operator (...) is used to expand iterable elements like arrays or objects.
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
// console.log(arr2);  // Output: [1, 2, 3, 4]

//17. Modules
//Modules allow you to break your code into separate files and import/export functionality.

// utils.js
// export 
function greet() {
    // console.log("Hello, World!");
  }
  
  // main.js
  // import { greet } from './utils.js';
  greet();  // Output: Hello, World!


//18.Classe
//Classes are blueprints for creating objects with methods and properties.
  class Car {
    constructor(brand) {
      this.brand = brand;
    }
    getBrand() {
      return this.brand;
    }
  }
  let cars = new Car("Tesla");
  // console.log(cars.getBrand());  // Output: Tesla
  