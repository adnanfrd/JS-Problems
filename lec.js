// variables 
//variables are used to store data...

// let name = 'john';
// console.log(name);
// blocked scope varaible 
// function example() {
//     if(true){
//      console.log(count);
//      //10
//     }
//     console.log(count);
//     //error when uses let;
    
// }

// var lastname = 'Doe';
// //var creates a function scoped variable;

// function example() {
//     if(true){
//      console.log(count);
//      //10
//     }
//     console.log(count);
//     //10
    
// }

// console.log(lastname);

// const number = 10;

// console.log(number);

// const z = 10;

// console.log(z);

//2. Datatypes number, string boolean, object and undefined 
// let number = 10;//type number ;
// let value = true/false //booleans 
// let name = 'smith'//string

//3.functions are resusable block of code that perform a specific task
//simple function
// function greet(){
//   console.log("helloo world");
  
// }
// greet();

// const handleClick  = ()=>{
//     console.log("handle clicked ");
    
// }
// handleClick()

//Objects  stores poerties and methods 
//properties key and values pair methods are functions.

// let car = {
//     color:"black",//key = value
//     brand:['merceds', 'lamgor', 'fhfhf', 'honda'],
//     model: function(){
//         return "2024"
//     }
// }
// console.log(car.brand);

//arrrays srae used to store multiple values in a single variable..

// let names = ['john', 'Doe', 'smith', '65', 675, 675, true]

// console.log(names);

//6.conditionals
// let score = 70;
// if(score> 80){
//     console.log("A grade");
    
// }else{
//     console.log("B grade");
    
// }

//loops are used to perform repetative tasks..

// for(let i =10; i>=1; i--){
//    console.log(i);
    
// }

//8.arow

// const add = (a, b)=> a + b;

// console.log(add(2, 5));
//9. promises
//a. fulfilled b. pending , c Rejected .

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Success!"), 1000);
//   });
//   promise.then(result => console.log(result));  // Output: Success!
//asyn await 
// javascript code line by line execuite ho rha hota hai ...
// console.log("1"); //1osec
// console.log("2");
// async function fetchData() {//1osec
//     let result = await promise 
//     console.log(result);   
// }
// fetchData();
// console.log("3");

// another async example
// console.log("1");
// console.log("2");
// console.log("3");
// setTimeout(() => {
//     console.log("4");
// }, 3000);
// console.log("5");





//map(),,,,
//creates a new array by apply a function to each element of array.

// let numbers = [{
//     name:"john",
//     email:"admin@gmail.com",
//     password:"1234"
// },
// {
//     name:"doe",
//     email:"admin@gmail.com",
//     password:"1234"
// },
// {
//     name:"rubin",
//     email:"admin@gmail.com",
//     password:"1234"
// },
// {
//     name:"Gajera",
//     email:"admin@gmail.com",
//     password:"1234"
// }

// ];
// let values = numbers.map((value)=>{
//     return value;
// });
// console.log(values);

//12.filter creates a new array according to given conditions;

// let numbers =[1, 2, 3, 4, 5, 6]
// let evenNumbers = numbers.filter((num)=>{
//     return num % 2 !== 0
// })
// console.log(evenNumbers);
//13. forEeach
// let fruitss = ["apple", "banana", "orange"];

// fruitss.forEach(fruit => console.log(fruit));

//14. Template Literals
//template literals allow embeeding variables in strings using backticks(') and ${};
// let port = 3000;

// console.log(`server running on port ${port}`);

// let [a, b] = [1, 2];
// console.log(b);



