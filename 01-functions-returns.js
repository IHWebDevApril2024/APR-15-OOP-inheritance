// Console logs and returns
function bringMeCoffee(){
    const capsule = false;
    console.log("We have a capsule: ", capsule);
    const mug = true;
    console.log("We have a mug: ", mug);
    const machine = true;
    console.log("We have a machine: ", machine);

    if(capsule && mug && machine){
        // console.log("Coffee is done!");
        return "Coffee is done!"
    } else{
        return "Sorry you are missing capsule, mug or machine"
    }
}

console.log(bringMeCoffee()); // I can see whatever the return gives me inside the function
