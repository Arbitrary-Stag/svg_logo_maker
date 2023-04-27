
// This line of code allows this file to use the Circle, Triangle, and Square classes from the shapes.js file. //
const {Circle, Triangle, Square} = require('./shapes.js');

// This next block of code describes a test that utilizes the Circle class. //
describe('Circle', () => {
  describe('Circle', () => {
    it('renders correctly', () => {
      const shape = new Circle();
      shape.setColor("blue")
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" height="100%" width="100%" fill=blue />`);
    });
  });
});

// This next block of code describes a test that utilizes the Triangle class. //
describe('Triangle', () => {
  describe('Triangle', () => {
    it('renders correctly', () => {
      const shape = new Triangle();
      shape.setColor("green")
      expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill=green />`);
    });
  });
});

// This next block of code describes a test that utilizes the Square class. //
describe('Square', () => {
  describe('Square', () => {
    it('renders correctly', () => {
      const shape = new Square();
      shape.setColor("red")
      expect(shape.render()).toEqual(`<rect cx="50" height="200" width="200" fill=red />`);
    });
  });
});
 