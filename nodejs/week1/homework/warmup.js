console.log("inside warmup file");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    return 2 * 3.14 * this.radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const circle = new Circle(10);
console.log(circle.getDiameter());
console.log(circle.getArea());
console.log(circle.getCircumference());
