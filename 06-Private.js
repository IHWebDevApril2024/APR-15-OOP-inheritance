class User {
    // Create a private proeprty
    #password;

    constructor(name, age, password){
        this.name = name;
        this.age = age;
        this.#password = password;
    }

    displayPassword(){
        console.log(this.#password);
    }
}

const newUser = new User("Marcel", 20, 1234);

console.log(newUser);
newUser.displayPassword()