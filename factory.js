class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  createCar(model) {
    switch (model) {
      case "civic":
        return new Car("Honda Civic", 40000);
      case "accord":
        return new Car("Honda accord", 403000);
      case "city":
        return new Car("Honda City", 50000);
      default:
        throw new Error("Unknown Model");
    }
  }
}

const factory = new CarFactory();
const civic = factory.createCar("civic");
