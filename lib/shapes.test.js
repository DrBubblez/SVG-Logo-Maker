const { Shape, Circle, Square, Triangle } = require('./shapes');
// these are the test cases for each shape class
describe('Shape', () => {
  it('should have the a color property', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.color).toEqual("blue");
    });
});

describe('Shape', () => {
    it('should have the a color property', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.color).toEqual("red");
    });
});

describe('Shape', () => {
    it('should have the a color property', () => {
        const shape = new Circle();
        shape.setColor("pink");
        expect(shape.color).toEqual("pink");
    });
});

