String.prototype.whatever = 100; // we are adding a property to all the Strings STUPID EXAMPLE

const myString = "This is a regular string";
const myString2 = "Hello";

console.log(myString.length);

String.prototype.capitalizeFirst = function () {
  let formatedName = this.toLowerCase();
  let capitalizedFirst = this[0].toUpperCase();
  return capitalizedFirst + formatedName.slice(1);
};

const firstName = "paco";
const lastName = "barker";

const firstNameCapitalized = firstName.capitalizeFirst();
const lastNameCapitalized = lastName.capitalizeFirst();

console.log("This is before the method: ", firstName);
console.log("This is after the method: ", firstNameCapitalized);
console.log("This is before the method: ", lastName);
console.log("This is after the method: ", lastNameCapitalized);

class User {
  constructor(name, lastName) {
    this.name = name.capitalizeFirst();
    this.lastName = lastName.capitalizeFirst();
  }
};

const newUser = new User("heleDSADSADSAa", "garcia")

console.log(newUser);