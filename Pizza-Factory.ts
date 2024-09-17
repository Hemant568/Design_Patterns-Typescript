abstract class PizzaF {
  protected name!: string;
  getDescription(): string {
    return this.name;
  }
  abstract prepare(): void;
  abstract bake(): void;
  abstract cut(): void;
  abstract box(): void;
}

class BlrCheesePizza extends PizzaF {
  constructor() {
    super();
    this.name = "BlrCheese";
  }
  prepare(): void {
    console.log("prepared");
  }
  bake(): void {
    console.log("baked");
  }
  cut(): void {
    console.log("cut");
  }
  box(): void {
    console.log("packed");
  }
}

class BlrPepperPizza extends PizzaF {
  constructor() {
    super();
    this.name = "BlrPepper";
  }
  prepare(): void {
    console.log("prepared");
  }
  bake(): void {
    console.log("baked");
  }
  cut(): void {
    console.log("cut");
  }
  box(): void {
    console.log("packed");
  }
}

class BlrNormalPizza extends PizzaF {
  constructor() {
    super();
    this.name = "BlrNormal";
  }
  prepare(): void {
    console.log("prepared");
  }
  bake(): void {
    console.log("baked");
  }
  cut(): void {
    console.log("cut");
  }
  box(): void {
    console.log("packed");
  }
}

class DlCheesePizza extends PizzaF {
  constructor() {
    super();
    this.name = "DlCheese";
  }
  prepare(): void {
    console.log("prepared");
  }
  bake(): void {
    console.log("baked");
  }
  cut(): void {
    console.log("cut");
  }
  box(): void {
    console.log("packed");
  }
}

class DlPepperPizza extends PizzaF {
  constructor() {
    super();
    this.name = "DlPepper";
  }
  prepare(): void {
    console.log("prepared");
  }
  bake(): void {
    console.log("baked");
  }
  cut(): void {
    console.log("cut");
  }
  box(): void {
    console.log("packed");
  }
}

class DlNormalPizza extends PizzaF {
  constructor() {
    super();
    this.name = " DlNormal";
  }
  prepare(): void {
    console.log("prepared");
  }
  bake(): void {
    console.log("baked");
  }
  cut(): void {
    console.log("cut");
  }
  box(): void {
    console.log("packed");
  }
}

abstract class PizzaStore {
  orderPizza(type: string): PizzaF {
    const pizza = this.createPizza(type);
    console.log(`making a ${type} pizza`);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
  abstract createPizza(type: string): PizzaF;
}

class BlrPizza extends PizzaStore {
  createPizza(type: string): PizzaF {
    switch (type) {
      case "cheese":
        return new BlrCheesePizza();
      case "pepper":
        return new BlrPepperPizza();
      default:
        return new BlrNormalPizza();
    }
  }
}

class DlPizza extends PizzaStore {
  createPizza(type: string): PizzaF {
    switch (type) {
      case "cheese":
        return new DlCheesePizza();
      case "pepper":
        return new DlPepperPizza();
      default:
        return new DlNormalPizza();
    }
  }
}

const blrStore = new BlrPizza();
const blrPizza = blrStore.orderPizza("cheese");
console.log(`you ordered ${blrPizza.getDescription()}`);

const dlStore = new DlPizza();
const dLPizza = blrStore.orderPizza("pepper");
console.log(`you ordered ${dLPizza.getDescription()}`);
