let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
  }; 
//   delete car.model; first step is delete keyword ...
//   let {model, ...newcar} = car; 2nd step is destructuring... Spread operator...
//  car.color = 'red'; adding new value...
// let updatedCAr = {...car, color:"red"};
// let updatedCar = Object.assign({},car, {color:"Red"});
//   console.log(car);
  
  //Recursive function...

  //Reacursive function is a function that is called itself somewhere in the body of the function. it's repeat calling untill the desired output is achieved.

  function recursiveFunction(n){
    if(n === 0){
        console.log("Task Completed!"); 
        return; 
    } else{
        console.log("I'm doing something!");
        recursiveFunction(n-1)
    }
  }

//   recursiveFunction(10);
function findFactorial(num) {
    if (num === 0) return 1
    let factorial = num * findFactorial(num - 1)
    return factorial;

  }
  
  findFactorial(5) 

  //Recursive function has three parts :
  // the function definition      2. the base condition   3. the recursive call

  function createHello(){
       return function newFunc(){
        return "Hello Wolrd";
       }
  }
  createHello();

  //Store  in redux : the global state of your application stored in an object tree within a single store.
  //Action: the only way to change the state is to emit an action, an object describing what happened.
  // Reducers: To specify how the state tree is transformed by actions, you write pure reducers.
  //Reducers are just pure functions that take the previous state and an action, and return the next state.

