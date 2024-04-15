/*
Create two classes for different objects.
Then create a few objects for each class
Try to create a method that console.logs the object
*/

class Pet{
    constructor(name, age, spieces){
        this.name = name;
        this.age = age;
        this.spieces = spieces;
    }

    petInfo(){
        console.log(this);
    }
}

const firstPet = new Pet("Lucas", 6, "Dog");

firstPet.petInfo();

