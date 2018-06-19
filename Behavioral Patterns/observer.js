/**
 * Intent: Define a one-to-many dependency between objects so that when one object
 * changes states, all its dependents are notified and updated automatically.
 */
class Store {
    // Observable
    constructor(name) {
        this.name = name;
        this.subscribes = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    sale(discount) {
        this.subscribers.forEach(observer => observer.notify(this.name, discount));
    }

}

class Shopper {
    // Observer
    constructor(name) {
        this.name = name;
    }

    notify(storeName, discount) {
        console.log(`${this.name}, there is a sale at ${storeName}! ${discount}5 off everything.`);
    }
}

class Mall {
    // Observer
    constructor() {
        this.sales = [];
    }

    notify(storeName, discount) {
        this.sales.push({ storeName, discount });
    }
}

var catsAndThings = new Store("Cats & Things");
var insAndOuts = new Store("Ins and Outs");

var alex = new Shopper("Alex");
var eve = new Shopper("Eve");
var sharon = new Shopper("Sharon");
var mike = new Shopper("Mike");

var valleyMall = new Mall();

// Observable(state changes) has subscribe method for other objects(observers) to subscribe
// Observable.subscribe(observer);
catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(mike);
catsAndThings.subscribe(valleyMall);

insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

catsAndThings.sale(20);
insAndOuts.sale(50);

console.log(valleyMall.sales);
