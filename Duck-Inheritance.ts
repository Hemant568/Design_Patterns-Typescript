/*
we cam see there is a problem in that -----> unnecessary implemententation of base class methods
*/

abstract class Duck {
  quack() {}
  fly() {}
  abstract display();
}

class DuckTypeOne extends Duck {
  display() {
    //own dispaly behaviour
  }
}

class DuckTypeTwo extends Duck {
  display() {
    //own dispaly behaviour
  }
}

class DuckWithoutFlying extends Duck {
  display() {
    //own dispaly behaviour
  }
  fly() {
    //overirde --> throw can not fly
  }
}

class DuckWithoutQuack extends Duck {
  display() {
    //own dispaly behaviour
  }
  quack() {
    //overirde --> throw can not quack
  }
}
