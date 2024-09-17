/*
Drone and Duck, both has different interface
Now, can we create one adapter so that Drone run in Duck Simulator
*/

interface IDrone {
  spin_rotors(): void;
  beep(): void;
  take_off(): void;
}

interface IDuck {
  quack(): void;
  fly(): void;
}

class SuperDrone implements IDrone {
  spin_rotors(): void {
    console.log("rotors are spinning");
  }
  beep(): void {
    console.log("beep beep beep");
  }
  take_off(): void {
    console.log("taking off...");
  }
}

class DroneAdapter implements IDuck {
  protected drone!: SuperDrone;
  constructor(drone: SuperDrone) {
    this.drone = drone;
  }
  quack(): void {
    this.drone.beep();
  }
  fly(): void {
    this.drone.spin_rotors();
    this.drone.take_off();
  }
}

const drone = new SuperDrone();
const adapter = new DroneAdapter(drone);
adapter.quack();
adapter.fly();
