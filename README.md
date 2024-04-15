# OOP, classes, instances and inheritance

## Object Oriented Programming (OOP)

Object Oriented Programming is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

## Methods

Methods are functions that are stored as object properties.
Examples:

```javascript
let user = {
  name: "John",
  age: 30,
  sayHi: function () {
    console.log("Hello!");
  },
};

user.sayHi(); // Hello!
```

## `this` keyword

The `this` keyword refers to the object it belongs to. In a method, `this` refers to the owner object.

```javascript
let user = {
  name: "John",
  age: 30,
  sayHi: function () {
    console.log("Hello " + this.name);
  },
};

user.sayHi(); // Hello John
```

## Classes

In JavaScript, a class is a blueprint for creating objects (a particular data structure), providing initial values for each instance created. And also methods.

```javascript
class User {
  constructor(name) {
    // we are building the mold for the object and the constructor is the method that will be called when we create a new object
    this.name = name;
  }

  sayHi() {
    console.log("Hello " + this.name);
  }
}

let user = new User("John"); // all the users will have the same properties and methods, the only thing that will change is the name in this case
user.sayHi(); // Hello John
```

We use the keyword `new` to create an instance of a class. The object is going to be created and the constructor method is going to be called with the arguments that we pass.

## Inheritance

Inheritance is a mechanism in which a new class is derived from an existing class. It allows us to create a new class that reuses the properties and methods of the superior one.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name); // we call the constructor of the parent class
  }
  sayHi() {
    console.log("Meow!");
  }
}

let newCat = new Cat("Tom");
newCat.sayHi(); // Meow!
```

The `extends` keyword is used in class declarations to create a class as a child of another class. This way, we can inherit all the properties and methods of the parent class.

## Static methods and properties

Static methods and properties are accessed directly from the class itself, not from the instances of the class.

```javascript
class User {
  static staticMethod() {
    console.log("Hello!");
  }
  constructor(name) {
    this.name = name;
  }
}

User.staticMethod(); // Hello!

let user = new User("John");
user.staticMethod(); // TypeError: user.staticMethod is not a function
```

A static property is a property of the class itself, not an instance of the class. Similarly, a static method is a method of the class itself, not of the instance.

```javascript
class User {
  static numberOfUsers = 0;
  constructor(name) {
    this.name = name;
    User.numberOfUsers++; // we increment the number of users every time we create a new user
  }
}

let user1 = new User("John");
console.log(User.numberOfUsers); // 1
let user2 = new User("Alice");
console.log(User.numberOfUsers); // 2
```

# Arrow functions

An arrow function is a shorter syntax for writing function expressions.

Example of a function expression:

```javascript
const sum = function (a, b) {
  return a + b;
};
```

With arrow functions, we can write the same function like this:

```javascript
const sum = (a, b) => {
  return a + b;
};
```
When we need to use callbacks we can use arrow functions to make the code more readable.

For example, on a forEach:

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});
```

This way we can avoid using the `function` keyword and more other things we'll see later.