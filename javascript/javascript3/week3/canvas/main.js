const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    context.beginPath();
    context.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);

    context.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      this.fillStyle
    );
    context.fill();
  }
}

// const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
// c1.draw();

function createCircleEvery100ms(currentPositionX, currentPositionY) {
  setInterval(() => {
    const randomXPoint = currentPositionX + (Math.random() - 0, 5) * 2;
    const randomYPoint = currentPositionY + (Math.random() - 0, 5) * 2;
    const randomRadius = Math.floor(Math.random() * 11);

    const c1 = new Circle(
      randomXPoint,
      randomYPoint,
      randomRadius,
      0,
      2 * Math.PI,
      "#000000"
    );
    c1.draw();
  }, 100);
}

// createCircleEvery100ms();

window.addEventListener("mousemove", mouseMoveHandler);

function mouseMoveHandler(e) {
  const currentPositionX = e.x;
  const currentPositionY = e.y;
  console.log(currentPositionX, currentPositionY);
  createCircleEvery100ms(currentPositionX, currentPositionY);
}
