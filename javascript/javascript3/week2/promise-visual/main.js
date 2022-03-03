const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

// function translateOneByOne() {
//   moveElement(redBox, { x: 20 - redBox.offsetLeft, y: 300 - redBox.offsetTop })
//     .then(() => console.log("Red box is moved"))
//     .then(() =>
//       moveElement(blueBox, {
//         x: 400 - blueBox.offsetLeft,
//         y: 300 - blueBox.offsetTop,
//       })
//     )
//     .then(() => console.log("Blue box is moved"))
//     .then(() =>
//       moveElement(greenBox, {
//         x: 400 - greenBox.offsetLeft,
//         y: 20 - greenBox.offsetTop,
//       })
//     )
//     .then(() => console.log("Boxes are moved"));
// }
// translateOneByOne();

function translateAllAtOnce() {
  Promise.all([redBox, blueBox, greenBox]).then(() => {
    moveElement(redBox, {
      x: 20 - redBox.offsetLeft,
      y: 300 - redBox.offsetTop,
    })
      .then(() => console.log("Red box is moved"))
      .then(() => {
        moveElement(blueBox, {
          x: 400 - blueBox.offsetLeft,
          y: 300 - blueBox.offsetTop,
        })
          .then(() => console.log("Blue box is moved"))
          .then(() => {
            moveElement(greenBox, {
              x: 400 - greenBox.offsetLeft,
              y: 20 - greenBox.offsetTop,
            }).then(() => console.log("Green box is moved"));
          });
      });
  });
}

translateAllAtOnce();
