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
const rect = new Rectangle(1, 1);
console.log(`Width: ${rect.width}, Height: ${rect.height}`);
console.log(`Area: ${rect.calculateArea()}`);





