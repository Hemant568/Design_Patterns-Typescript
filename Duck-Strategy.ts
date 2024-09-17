/*
 IS-A ---> A mallard duck is a Duck
 HAS-A ---> A duck has a fly or Quack behaviour
 Favour Composition over Inheritance
*/

interface QuackInterface {
  quack(): void;
}

interface FlyInterface {
  fly(): void;
}

class FlyBehaviour implements FlyInterface {
  fly(): void {
    console.log("I am flying");
  }
}

class QuackBehaviour implements QuackInterface {
  quack(): void {
    console.log("I am making a noise");
  }
}

//The Duck Superclass
abstract class DuckStrategy {
  protected flyBehaviour!: FlyInterface;
  protected quackBehaviour!: QuackInterface;

  performFly() {
    this.flyBehaviour.fly();
  }

  performQuack() {
    this.quackBehaviour.quack();
  }

  swim() {
    console.log("All ducks float");
  }
  abstract display(): void;
}

//A concrete class
class MallardDuck extends DuckStrategy {
  constructor() {
    super();
    this.flyBehaviour = new FlyBehaviour();
    this.quackBehaviour = new QuackBehaviour();
  }
  display(): void {
    console.log("A mallard look");
  }
}

const mallardDuck = new MallardDuck();
mallardDuck.performFly();
mallardDuck.performQuack();
