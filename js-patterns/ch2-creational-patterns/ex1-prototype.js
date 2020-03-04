class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

const civic = new Car(4, 'V6', 'grey');
document.getElementById('root').innerHTML = Object.keys(civic);

console.log(civic);
console.log("==================");

function Person(first, last, age, gender, interests) {
  
    // property and method definitions
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  //...
  }
  
  var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
  console.log(person1.valueOf());