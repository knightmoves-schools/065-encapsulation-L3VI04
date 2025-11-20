// index.js

class Rectangle {
  constructor(width, height) {
    // Encapsulated variables
    this.width = width;
    this.height = height;
  }

  // Method to calculate area (no arguments needed)
  calculateArea() {
    return this.width * this.height;
  }
}

// Example usage:
const rect = new Rectangle(10, 5);
console.log(`Width: ${rect.width}, Height: ${rect.height}`);
console.log(`Area: ${rect.calculateArea()}`);

// index.js
const Rectangle = require('./Rectangle');

// Define variables
const rectWidth = 10;
const rectHeight = 5;

// Pass variables into the constructor
const myRectangle = new Rectangle(rectWidth, rectHeight);

console.log(`Width: ${myRectangle.width}`);
console.log(`Height: ${myRectangle.height}`);
console.log(`Area: ${myRectangle.area()}`);
