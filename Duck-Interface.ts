/*
Still there is a problem in the design, we have to implement multiple inheritance
*/

abstract class DuckClass {
  abstract display(): void; //put the common methods only
}

interface QuackInterface {
  quack(): void;
}

interface FlyInterface {
  fly(): void;
}

class DuckWithQuack extends DuckClass implements QuackInterface {
  display(): void {}
  quack(): void {}
}

class DuckWithFly extends DuckClass implements FlyInterface {
  display(): void {}
  fly(): void {}
}

class DuckWithQuackAndFly
  extends DuckClass
  implements QuackInterface, FlyInterface
{
  display(): void {}
  quack(): void {}
  fly(): void {}
}
