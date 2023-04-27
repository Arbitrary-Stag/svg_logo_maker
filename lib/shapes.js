
// The class Shape serves as the blueprint for the Circle, Triangle, and Square classes which all extend it. //
// The class Shape has the acronym, letterColor, and shapeColor attributes as well as a function that allows //
// the ability to set a variable called color by calling a built in function. //

class Shape{
    constructor(acronym, letterColor, shapeColor) {
        this.acronym = acronym;
        this.letterColor = letterColor;
        this.shapeColor = shapeColor;
    }
    setColor(color) {
        this.color=(color);
    }
  }

// The Circle class extends Shape and also features a render() function that returns a line of SVG code that //
// describes the attributes of a circle and defines the color the shape is meant to be. //
class Circle extends Shape {
  constructor(acronym, letterColor, shapeColor) {
    super(acronym, letterColor, shapeColor);
  }
    render(){
        return `<circle cx="150" cy="100" r="100" height="100%" width="100%" fill=${this.color} />`
    }
  }

// The Triangle class extends Shape and also features a render() function that returns a line of SVG code that //
// describes the attributes of a triangle and defines the color the shape is meant to be. //
class Triangle extends Shape {
  constructor(acronym, letterColor, shapeColor) {
    super(acronym, letterColor, shapeColor);
  }
    render(){
        return `<polygon height="100%" width="100%" points="50,175 250,175 150,0" fill=${this.color} />`
    }
  }

// The Square class extends Shape and also features a render() function that returns a line of SVG code that //
// describes the attributes of a square and defines the color the shape is meant to be. //  
class Square extends Shape {
  constructor(acronym, letterColor, shapeColor) {
    super(acronym, letterColor, shapeColor);
  }
    render(){
        return `<rect x="50" height="200" width="200" fill=${this.color} />`
    }
  }

// This line of code makes it possible to use the Circle, Triangle, and Square classes in other files. //  
module.exports = {Circle, Triangle, Square};