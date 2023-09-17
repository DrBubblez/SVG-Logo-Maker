// Shape Constructor Class
class Shape {
    // This is the constructor for the shape class and sets the color
    constructor(color) {
        this.color = color;
    }
    // This takes in the color and sets it to the color variable
    setColor(color) {
        this.color = color;
    }
}

// This is the Triangle class
class Triangle extends Shape {
    return() {
        return `<polygon points="150,18 244,182 56,182" style="fill:${this.color}"/>`;
    }
}
// This is the Square class
class Square extends Shape {
    return() {
        return `<rect width="100" height="100" style="fill:${this.color}"/>`;
    }
}
// This is the Circle class
class Circle extends Shape {
    return() {
        return `<circle cx="150" cy="100" r="80" style="fill:${this.color}"/>`;
    }
}

module.exports = { Shape, Triangle, Square, Circle };