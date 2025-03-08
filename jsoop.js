// In JavaScript, an object is a fundamental building block of Object-Oriented Programming (OOP). It is a collection of properties and methods, where properties are values associated with the object, and methods are functions that perform operations on those values. Objects in JavaScript are dynamic collections, which means you can add, modify, or delete properties and methods at runtime.
//1.Properties:= key-value pairs that store data about the object.
let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
  }; 
//   console.log(car);
//2.Methods:= Functions that are associated with an object and can perform actions using the object's properties.

let carDetails = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    startEngine: function() {
     return{
        day:'saturday',
        month:'October',
        year:'2024'
     }
    }
  };
  
//  console.log(carDetails.startEngine()); 
//3.Constructors:= Special functions used to create multiple instances of objects with similar properties and methods. 

class CarProperties {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
  
  let myCar = new CarProperties('Honda', 'Civic', 2018);
//   console.log(myCar.brand); 
//4. Encapsulation:= Bundling the properties (data) and methods (functions) within an object, which hides the implementation details from the user. This is done by using private or closure-based mechanisms (though private fields are not fully supported until ES6+ with classes).
//Encapsulation: The process of wrapping properties and functions within a single unit is known as encapsulation. 

class BankAccount {
    // Private fields   
    #balance;
  
    constructor(accountHolder, initialBalance) {
      this.accountHolder = accountHolder;
      this.#balance = initialBalance;
    }
  
    // Public method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    // Public method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log('Invalid withdrawal amount.');
      }
    }
  
    // Public method to check balance
    getBalance() {
      return this.#balance;
    }
  }
  
  // Create a bank account instance
  const myAccount = new BankAccount('John Doe', 1000);
  
  myAccount.deposit(500);   // Output: Deposited $500. New balance: $1500
  myAccount.withdraw(300);  // Output: Withdrew $300. New balance: $1200
  
//   console.log(myAccount.getBalance());  // Output: 1200
  
  // Trying to access private field directly results in an error
  // console.log(myAccount.#balance);   // SyntaxError: Private field '#balance' must be declared in an enclosing class
  
//5. Inheritance: Objects can inherit properties and methods from other objects using prototype chains or classes. This allows for code reuse.
class Vehicle {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    start() {
      console.log('Starting vehicle...');
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, model, year) {
      super(brand, model);
      this.year = year;
    }
  
    displayInfo() {
    //   console.log(`${this.brand} ${this.model} (${this.year})`);
    }
  }
  
  let myCard = new Car('Tesla', 'Model S', 2022);
  myCard.displayInfo(); 
 
//6.Polymorphism:= Polymorphism is one of the core concepts of object-oriented programming languages. Polymorphism means the same function with different signatures is called many times.
// In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. Polymorphism can be achieved by method overriding and method overloading.
// Base class (or Parent class)
class Animal {
  speak() {
    console.log('The animal makes a sound.');
  }
}

// Subclass (or Child class) 1
class Dog extends Animal {
  speak() {
    console.log('The dog barks.');
  }
}

// Subclass (or Child class) 2
class Cat extends Animal {
  speak() {
    console.log('The cat meows.');
  }
}

// Subclass (or Child class) 3
class Bird extends Animal {
  speak() {
    console.log('The bird sings.');
  }
}

// Create instances
const myDog = new Dog();
const myCat = new Cat();
const myBird = new Bird();

// Call the speak method (polymorphism in action)
myDog.speak(); // Output: The dog barks.
myCat.speak(); // Output: The cat meows.
myBird.speak(); // Output: The bird sings.


//7.Abstraction: Abstraction means displaying only essential information and hiding the details. Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation. 

