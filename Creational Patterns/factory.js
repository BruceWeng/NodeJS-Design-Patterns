/**
 * Intent: Define an interface for creating an object, but let subclasses decide
 * which class to instantiate. Factory Method lets a class defer instantiation to
 * subclasses.
 */
class Person {

    constructor(name='unnamed person')  {
        this.name = name;
    }

    toString() {
        return JSON.stringify(this);
    }

}

class Shopper extends Person {

    constructor(name, money=0) {
        super(name);
        this.money = money;
        this.employed = false;
    }

}

class Employee extends Shopper {

    constructor(name, money=0, employer='') {
        super(name, money);
        this.employer = employer;
        this.employed = true;
    }

    payDay(money=0) {
        this.money += money;
    }

}

var userFactory = (name, money=0, type, employer) => {
    if (type === 'employee') {
        return new Employee(name, money, employer);
    } else {
        return new Shopper(name, money);
    }
}

module.exports = userFactory;
