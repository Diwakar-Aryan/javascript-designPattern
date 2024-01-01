/*
Proxy Pattern
With a Proxy object, we get more control over the interactions with certain objects.
A proxy object can determine the behavior whenever we’re interacting with the object,
for example when we’re getting a value, or setting a value.

*/

const person = {
  name: "Diwakar Singh",
  age: 25,
  nationality: "Indian",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of  ${prop} is ${obj[prop]}`);
    return obj[prop];
  },

  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
  },
});

console.log(personProxy.name);
personProxy.age = 26;

console.log(person);
