// These are the required dependencies for the app to function, as well as some imported shape functions from the shapes.js file //
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');

// This variable is an array of question objects that will be prompted to the user to acquire necessary data to build an svg logo of their choosing. //
const questions = [
  { 
    type: 'list',
    message: 'Please select a shape for your svg logo.',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square'],
    validate: (value) => {if (value){return true} else {return "Input is required to continue."}}
    },
  { 
    type: 'input',
    name: 'acronym',
    message: 'Please input 1-3 letters for your svg logo.',
    validate: (value) => {if (value.length <= 3){return true} else {return "Input must be 3 letters or less to continue."}}
  },
  { 
    type: 'input',
    name: 'letterColor',
    message: 'Please input either a COLOR KEYWORD or hexadecimal color number for your svg logos text color.',
    validate: (value) => {if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: 'shapeColor',
    message: 'Please input either a COLOR KEYWORD or hexadecimal color number for your svg logos background color.',
    validate: (value) => {if (value){return true} else {return "Input is required to continue."}}
  },
];

// This function serves to produce a string that serves as a template for an svg file. //
// It makes use of the render() function which was imported from shapes.js as well as //
// information provided by the user from the question prompts. //
function generateShape(shape) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
   ${shape.render()}
 
   <text x="150" y="120" font-size="60" text-anchor="middle" fill=${shape.letterColor}>${shape.acronym}</text>
 
 </svg>`
 };
 
// This function serves to write the svg file in a specific location, and to console log whether the function was able to execute successfully or if there was an error. //
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log("Error", err);
        return;
      }
      console.log("Your logo was successfully generated!");
    });
  }

// This function is the function that actually brings everything together. //
// It uses inquirer to prompt the user the array of questions which provides the data for the SVG logo. //
// Next depending on what shape for their logo the user chose a new function is called based on that type //
// and via inheritence passes on the other attributes selected by the user. //
// Lastly, the writeToFile() function is called. //
function init() {
    inquirer.prompt(questions).then((answers) => {
  
      if (answers.shape === 'Circle') {
        const shape = new Circle(answers.acronym, answers.letterColor, answers.shapeColor);
        this.shape = shape;
      } 
      else if (answers.shape === 'Triangle')  {
        const shape = new Triangle(answers.acronym, answers.letterColor, answers.shapeColor);
        this.shape = shape;
      } 
      else if (answers.shape === 'Square')  {
        const shape = new Square(answers.acronym, answers.letterColor, answers.shapeColor);
        this.shape = shape;
      }

      this.shape.setColor(answers.shapeColor)
      writeToFile(`./examples/${this.shape.acronym}.svg`, generateShape(this.shape));
    });
  }

// Calls in the init() function upon loading of the file. //
init();