/*
The prototype pattern is a useful way to share properties among many objects of the same type.
The prototype is an object that’s native to JavaScript, and can be accessed by objects through the prototype chain.
*/

class Car {
  constructor(name) {
    this.name = name;
  }

  count() {
    return `${this.name} has 4 wheels`;
  }
}

const honda = new Car("Honda");
const toyota = new Car("Toyota");
const bmw = new Car("BMW");

console.log(honda.count());
console.log(toyota.count());
console.log(bmw.count());
