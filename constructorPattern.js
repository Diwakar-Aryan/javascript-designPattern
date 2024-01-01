function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function () {
  return `${this.model} has done ${this.miles} miles since ${this.year}`;
};

let city = new Car("Honda City", 2009, 20000);
let toyota = new Car("Toyota", 1990, 120000);
console.log(city.toString());
console.log(toyota.toString());
