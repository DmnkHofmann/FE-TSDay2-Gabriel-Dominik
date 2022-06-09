"use strict";
//class Person{
//    name: string;
//    age: number;
//    jobTitle: string;
//    constructor(x: string, age: number, jobTitle: string){
//        this.name = x;
//        this.age = age;
//        this.jobTitle = jobTitle;
//    }
//    personen(){
//        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`
//    }
//}//
//let person1 = new Person("Dominik", 2, "somthing");
//console.log(person1.personen());//
//class Job extends Person{
//    salary: number;
//    jobLocation: string;
//    constructor(x: string, age: number, jobTitle: string, salary: number, jobLocation: string){
//        super(x, age, jobTitle)
//        this.salary = salary;
//        this.jobLocation = jobLocation;//
//    }
//    joby(){
//        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle} and I get ${this.salary} every month, and I work in ${this.jobLocation}`
//    }
//    
//}
//let personJob = new Job("Dominik", 2, "somthing", 1500, "wien");
//console.log(personJob.joby());
class Vehicles {
    constructor(name, img) {
        this.name = name;
        this.img = img;
        nesto.push(this);
    }
    vehicle() {
        return `
        <div class="col-4">
        <div class="card" style="width: 18rem;">
             <img src="${this.img}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">${this.name}e</h5>
             </div>
        </div>
        </div>
        `;
    }
}
class Types extends Vehicles {
    constructor(name, img, city, description) {
        super(name, img);
        this.city = city;
        this.description = description;
    }
    vehicle() {
        return `
        <div class = "col"><div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${this.city}</h5>
            <p class="card-text">${this.description}</p>
            </div>
          </div>
        </div>`;
    }
}
const nesto = [];
new Vehicles("Mercedes", "logo.png");
new Types("Mercedes", "logo.png", "Germany", "The best");
for (let vehicle of nesto) {
    document.getElementById("druck").innerHTML +=
        vehicle.vehicle();
}
