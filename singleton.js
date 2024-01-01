// function Universe() {
//   if (typeof Universe.instance === "object") {
//     return Universe.instance;
//   }

//   //proceed as normal
//   this.start_time = 0;
//   this.band = "big";

//   //cache
//   Universe.instance = this;
// }

// var uni = new Universe();
// console.log(Universe);
// var uni2 = new Universe();
// console.log(uni === uni2);

class Organization {
  static #instance;
  #connection
  constructor() {
    this.#connection = null;
  }
  static getInstance() {
    if (!Organization.#instance) {
      Organization.#instance = new Organization();
    }
    return Organization.#instance;
  }

  connect() {
    this.#connection = "Connected";
    return this.#connection
  }
}
const db1 = Organization.getInstance();
const db2 = Organization.getInstance();
const db3 = new Organization();
console.log(db1 === db2,db3.connect());
