abstract class Beverage {
  protected name!: string;
  description() {
    return `this is ${this.name}`;
  }
  abstract cost(): number;
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.name = "Espresso";
  }
  cost(): number {
    return 4.5;
  }
}

abstract class CoffeeAddonDecorator extends Beverage {
  abstract description(): string;
}

class Mocha extends CoffeeAddonDecorator {
  private bv: Beverage;
  constructor(bv: Beverage) {
    super();
    this.bv = bv;
  }
  description() {
    return `${this.bv.description()} Mocha`;
  }
  cost() {
    return 1 + this.bv.cost();
  }
}

const espresso = new Espresso();
let coffee = new Mocha(espresso);
coffee = new Mocha(coffee);
console.log(coffee.description());
console.log(coffee.cost());
