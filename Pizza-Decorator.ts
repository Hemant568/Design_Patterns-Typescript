abstract class Pizza {
  protected type: string = "unknown";
  getDescription() {
    return this.type;
  }
  abstract cost(): number;
}

class ThinCrustPizza extends Pizza {
  constructor() {
    super();
    this.type = "ThinCrust";
  }
  cost(): number {
    return 10;
  }
}

abstract class PizzaToppings extends Pizza {
  abstract getDescription(): string;
}

class Cheese extends PizzaToppings {
  private p: Pizza;
  constructor(p: Pizza) {
    super();
    this.p = p;
  }
  getDescription() {
    return `${this.p.getDescription()} + Cheese`;
  }
  cost() {
    return this.p.cost() + 4;
  }
}

class Pepper extends PizzaToppings {
  private p: Pizza;
  constructor(p: Pizza) {
    super();
    this.p = p;
  }
  getDescription() {
    return `${this.p.getDescription()} + Pepper`;
  }
  cost() {
    return this.p.cost() + 2;
  }
}

const pizza = new ThinCrustPizza();
const pepperPizza = new Pepper(pizza);
const cheesePaperPizza = new Cheese(pepperPizza);
console.log(cheesePaperPizza.getDescription());
console.log(cheesePaperPizza.cost());
