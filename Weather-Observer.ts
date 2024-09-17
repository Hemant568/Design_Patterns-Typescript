interface ISubject {
  subscribe(o: IObserver): void;
  unsubscribe(o: IObserver): void;
  notify(): void;
}

interface IObserver {
  send(t: number, p: number): void;
}

class WeatherStation implements ISubject {
  private temperature: number;
  private pressure: number;
  private observers: IObserver[];

  constructor() {
    this.observers = [];
    this.temperature = 0;
    this.pressure = 0;
  }
  subscribe(o: IObserver): void {
    this.observers.push(o);
  }
  unsubscribe(o: IObserver): void {
    this.observers = this.observers.filter((ol) => ol !== o);
  }
  notify() {
    this.observers.forEach((element) => {
      element.send(this.temperature, this.pressure);
    });
  }
  setValues(t: number, p: number) {
    this.temperature = t;
    this.pressure = p;
    this.notify();
  }
}

class LogInterface implements IObserver {
  temperature: number;
  pressure: number;
  constructor(weatherStation: WeatherStation) {
    weatherStation.subscribe(this);
    this.temperature = 0;
    this.pressure = 0;
  }
  send(t: number, p: number): void {
    this.temperature = t;
    this.pressure = p;
    this.log();
  }
  log() {
    console.log(`Temperature : ${this.temperature}, Pressure ${this.pressure}`);
  }
}

const weatherInfo = new WeatherStation();
const log = new LogInterface(weatherInfo);
weatherInfo.setValues(12, 30);
