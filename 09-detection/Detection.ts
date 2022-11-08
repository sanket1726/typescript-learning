// This file explains about final part of type narrowing using kind key
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  height: number;
  width: number;
}

type Shape = Circle | Square;

function getTrueShare(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * shape.side;
}

type AllShape = Circle | Square | Rectangle;
function getArea(shape: AllShape) {
  switch (shape.kind) {
    case "square":
      return shape.side * shape.side;

    case "circle":
      return Math.PI * shape.radius ** 2;

    case "rectangle":
      return shape.height * shape.width;
  }
}
