class Teacher {
    constructor(name, bootcamp, city){
        this.name = name;
        this.bootcamp = bootcamp;
        this.city = city;
        this.company = "Ironhack"; // This is going to appear for every Teacher object
        this.students = [];
    }
}

const teacher1 = new Teacher("Marcel", "Web dev", "Barcelona");
const teacher2 = new Teacher("Alfons", "Data", "Barcelona");

teacher1.city = "Madrid";

teacher1.students.push("Nisol", "Kai", "Arnaldo", "Mikel", "Álvaro", "Kilikolo");


console.log(teacher1);
console.log(teacher2);