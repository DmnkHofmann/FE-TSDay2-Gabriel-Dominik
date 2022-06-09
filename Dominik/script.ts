class Person{
    fname : string;
    lname : string;
    age: number;
    jobtitle: string; 
    constructor(fname: string, lname: string, age: number, jobtitle: string) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.jobtitle = jobtitle;
    }
    printeverything() {
        return `Hello there, my name is ${this.fname} ${this.lname} and I am ${this.age} years old, and I am a ${this.jobtitle}`
    }
}
    let person1 = new Person ("Gabriel", "Skraba", 23, "Developer");
    console.log(person1. printeverything());

    class Job extends Person{
        salary: number;
        joblocation: string;
        constructor(fname: string, lname: string, age: number, jobtitle: string, salary: number, joblocation: string,) {
            super (fname, lname, age, jobtitle)
            this.joblocation = joblocation;
            this.salary = salary;
        }
        printeverything1() {
            return `Hello there, my name is ${this.fname} ${this.lname} and I am ${this.age} years old, and I am a ${this.jobtitle} and I get €${this.salary} every month, and I work in ${this.joblocation}`
        }
    }
    let person2 = new Job ("Gabriel", "Skraba", 23, "Developer", 15, "Gabriels Wohnung");
    console.log(person2.printeverything1());



  class Vehicles{
      
  }