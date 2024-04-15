const arrayOfNames = [
  "John",
  "Jane",
  "Michael",
  "Emily",
  "David",
  "Sarah",
  "Daniel",
  "Olivia",
  "Matthew",
  "Sophia",
  "Andrew",
  "Isabella",
  "William",
  "Ava",
  "James",
  "Mia",
  "Benjamin",
  "Charlotte",
  "Jacob",
  "Amelia",
];

arrayOfNames.forEach(function (name) {
  // Callback function
  console.log("Hello " + name);
});

arrayOfNames.forEach((name) => {
  // callback with arrow function (different way)
  console.log("Arrow " + name);
});

// This is a way to declare functions (using arrow syntax)
const myArrowFunction = (parameter1) => {
  console.log("THIS IS THE ARROW FUNCTION", parameter1);
};

// this is what we saw last week
function myRegularFunction(parameter1) {
  console.log("THIS IS THE REGULAR FUNCTION", parameter1);
}

myArrowFunction("THIS IS A PARAMETER");
