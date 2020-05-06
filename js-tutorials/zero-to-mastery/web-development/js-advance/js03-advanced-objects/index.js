//Evaluate these:
//#1
[2] === [2] // false
{} === {}   // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4; // object1, object2, object3 have a = 4, object4 has a = 5 



//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }

  makeSound(sound) {
    console.log(`${sound}..., my name is ${this.name}. I am a ${this.color} ${this.type}.`)
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
}

class Cow extends Mamal{
  constructor(name, type, color) {
    super(name, type, color)
  }

  makeMoo = this.makeSound("Moo");
}

const c = new Cow("Jerry", "cow", "pink");
c.makeMoo;