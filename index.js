// index.js

class Rectangle {
  constructor(length, height) {
    // Encapsulated variables
    this.width = length;
    this.height = height;
  }

  // Method to calculate area (no arguments needed)
  calculateArea() {
    return this.length * this.height;
  }
}

const length = 5;
const height =  10;

const rect = new Rectangle(length, height)

console.log(rect.calculateArea());






