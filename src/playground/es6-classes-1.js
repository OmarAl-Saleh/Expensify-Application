//L.24,25
class Person {
  constructor(name, age = 0) {
    // we should use this es6 function syntax to define the constructor not an arrow or a normal function
    this.name = name;
    this.age = age;
  }

  getGretting() {
    return `Hi.I am ${this.name}!`; // we can use the backticks to use the template strings
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`; // advice : always use the backticks in string templates even if you don't use the template strings to get used to it
  }
}
// extend the class (inheritance)

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // we use super to call the parent constructor from child class or any method from the parent class
    this.major = major;
  }
  hasMajor() {
    return !!this.major; // this is a trick to return the boolean value of the string or the number (There is an image in description image file to explain this trick)
    // if the major is undefined or null or empty string it will return false otherwise it will return true
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, major = "", Traveler) {
    super(name, age, major);
    this.HomeLocation = Traveler;
  }

  hasTraveler() {
    return !!this.HomeLocation;
  }
  getGretting() {
    let gretting = super.getGretting();
    if (this.hasTraveler()) {
      gretting += `I'm visiting from ${this.HomeLocation}`;
    }
    return gretting;
  }
}

const me = new Person("OMAR AL-SALEH", 21);
console.log(me.getGretting());
console.log(me.getDescription());

const other = new Traveler(
  "Andrew Mead",
  26,
  "computer Science",
  "Philadelphia"
);
console.log(other.getGretting());
console.log(other.getDescription());
