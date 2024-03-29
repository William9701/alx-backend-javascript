import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  /* eslint-disable class-methods-use-this */
  cloneCar() {
    return new Car();
  }
  /* eslint-enable class-methods-use-this */
}
