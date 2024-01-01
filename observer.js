/*
The Subject maintains a list of observers.
The observers subscribe and unsubscribe to the subject.
When notify() is called, the subject updates all subscribed observers.
*/

class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }
  notify(data) {
    this.observers.forEach((o) => o.update(data));
  }
}
class Observer {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(`${this.name} recieved ${data}`);
  }
}
const subject = new Subject();
const observer1 = new Observer("O1");
const observer2 = new Observer("O2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Heloo ");
