//spread operator
//spread operator is used to make copy , and merging of an array;
const array1 = [10, 20, 30, 40];
const array2 = [50, 60, 70, 80];
// const combinedArray = [...array1, ...array2]
// console.log(combinedArray);
//copy of array 
// console.log(...array1);
const obj1 = {
    name: "John",
    age: 30,
    city: "New York"
};
const obj2 = {
    city: "Los Angeles",
    country: "USA"
};
const combinedObject = {...obj1, ...obj2};
// console.log(combinedObject);
const combinedArray = () => {
  const aar1 = [1,2,3,3,4,5];
  const aar2 = [4,5,6,7,8,9];
  return [...aar1,...aar2];
}
// console.log(combinedArray());
//rest operator
// rest operator is used to unpack values from an array into individual variables.
const [first,...rest] = [1, 2, 3, 4, 5];
// console.log(first); // Output: 1
// console.log(rest); // Output: [2, 3, 4, 5]
let user = {name:"John",}
let admin = user;
admin.name = "Admin"; 
// console.log(user.name); // Output: Admin

let x=null ;
// console.log(x);

 
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         // console.log(`Outer Variable: ${outerVariable}`);
//         // console.log(`Inner Variable: ${innerVariable}`);
//     };
// }

// const closureFunc = outerFunction('outside');
// closureFunc('inside');

// function outerfunction(outervariable){
//     return function innerfunction(innervariable){
//         console.log(`outer variable ${outervariable}`);
//         console.log(`inner variable ${innervariable}`);   
//     };
// };
// const closurefunc = outerfunction('yes out');
// closurefunc('yes in');
// Output:
// Outer Variable: outside
// Inner Variable: inside

// function  count(){
//     let count = 0;
//     return function increment(){
//         count++;
//         return count;

//         }
// };

// let counter1 = count();
// console.log("One",counter1());
// console.log("two",counter1());
// console.log("two",counter1());
// console.log("two",counter1());
// console.log("two",counter1());
// console.log("two",counter1());

function outer(out){
   return function inner(inn){
   console.log("inner",inn);
   console.log("outer", out);
   
    }
}

const closureFunc  =  outer('out ho jao');

closureFunc('in ho jao');

function badExample() {
    let largeArray = new Array(1000).fill('data');
    return function () {
        // console.log(largeArray.length);
    };
}

const example = badExample(); 


