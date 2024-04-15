class Teacher {
  constructor(name, bootcamp, city) {
    this.name = name;
    this.bootcamp = bootcamp;
    this.city = city;
    this.company = "Ironhack"; // This is going to appear for every Teacher object
    this.students = [];
  }

  addStudent(newStudent) {
    let formatedName = newStudent.toLowerCase();
    let capitalizedFirst = newStudent[0].toUpperCase();

    this.students.push(capitalizedFirst + formatedName.slice(1));
  }
}

const teacher1 = new Teacher("Marcel", "Web dev", "Barcelona");
const teacher2 = new Teacher("Mica", "UX/UI", "Barcelona");

teacher1.addStudent("KILIKOLO");
teacher1.addStudent("javier");

teacher2.addStudent("Anna")

console.log(teacher1, teacher2);