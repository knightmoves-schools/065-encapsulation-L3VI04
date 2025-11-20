// Original values
let length = 5;
let height = 10;

// Rectangle class encapsulating the logic
class Rectangle {
  constructor(length, height) {
    this.length = length;
    this.height = height;
  }

  // Method that uses the instance's properties
  calculateArea() {
    return this.length * this.height;
  }
}

// Create an instance using the original values
const myRectangle = new Rectangle(length, height);

// Output the result
console.log(`The area of the rectangle is: ${myRectangle.calculateArea()}`
