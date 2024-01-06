/*
The Abstract Factory takes the Factory method up a level by making factories  abstract and thus replaceable without the calling environment knowing the exact factory used or its internal workings. The calling environment only knows that all the factories have a set of common methods that it can call to perform the instantiation action.
*/


//A factory to create suv Cars
function SUVFactory() {
  this.createCar = function (name) {
    let car;
    if (name === 'Honda') {
      car = new Honda()
    } else if (name === 'Toyota') {
      car = new Toyota()
    }
    car.name = name
    car.printInfo = function () {
      console.log(`${car.name}'s price is  ${car.price} and is under ${car.size} category`);
    }
    return car
  }
}

function XUVFactory() {
  this.createCar = function (name) {
    let car;
    if (name === 'Mahindra') {
      car = new Mahindra()
    } else if (name === 'Bolero') {
      car = new Bolero()
    }
    car.name = name
    car.printInfo = function () {
      console.log(`${car.name}'s price is  ${car.price} and is under ${car.size} category`);
    }
    return car
  }
}


function Honda() {
  this.price = '10 L'
  this.size = 'L'
}

function Toyota() {
  this.price = '11 L'
  this.size = 'L'
}

function Mahindra() {
  this.price = '20 L'
  this.size = 'XXL'
}

function Bolero() {
  this.price = '22 L'
  this.size = 'XXL'
}


function run() {
  let cars = []
  let suvCars = new SUVFactory()
  let xuvCars = new XUVFactory()

  cars.push(suvCars.createCar('Honda'))
  cars.push(xuvCars.createCar('Mahindra'))

  for (let car of cars) {
    car.printInfo()
  }

}

run()