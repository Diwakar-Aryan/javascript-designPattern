/*
A mixin is an object that we can use in order to add reusable functionality to another object or class, without using inheritance. We can’t use mixins on their own: their sole purpose is to add functionality to objects or classes without inheritance.
*/

class Dog {
  constructor(name) {
    this.name = name
  }
}

const dogFunctionality = {
  bark: () => console.log('Woof !'),
  play: () => console.log('Playing !'),
  wag: () => console.log('Wagging tail!'),

}
Object.assign(Dog.prototype, dogFunctionality)

const pet1 = new Dog('Dww')
pet1.bark()
pet1.play()
pet1.play()