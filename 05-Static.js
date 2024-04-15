// static properties and methods
class Car {
  static numberOfCars = 0;

  static getNumberOfCars() {
    // Access the static property directly on the class
    return Car.numberOfCars;
  }
  constructor(model, brand) {
    this.model = model;
    this.brand = brand;
    Car.numberOfCars++;
  }
}

const newCar = new Car("Corolla", "Toyota");
const newCar2 = new Car("Micra", "Nissan");


console.log(newCar.numberOfCars);
