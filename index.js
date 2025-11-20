// Define the Rectangle class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

let length = 5;
let height = 10;

function calculateArea(length, height){
    return length * height;
  // Method to calculate area with no arguments
  calculateArea() {
    return this.width * this.height;
  }
}

// Example usage
const rectangle = new Rectangle(8, 6);
console.log("Area of the rectangle:", rectangle.calculateArea());
