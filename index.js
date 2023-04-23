const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const shapes = require('./lib/shapes.js');

const questions = [
  { 
    type: 'list',
    message: 'Please select a shape for your svg logo.',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square'],
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
    },
    { 
    type: 'input',
    name: 'acronym',
    message: 'Please input 1-3 letters for your svg logo.',
    validate: (value)=>{if (value.length <= 3){return true} else {return "Input must be 3 letters or less to continue."}}
  },
  { 
    type: 'input',
    name: 'letterColor',
    message: 'Please input either a color keyword or hexadecimal color number for your svg logos text color.',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: 'shapeColor',
    message: 'Please input either a color keyword or hexadecimal color number for your svg logos background color.',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log("Error", err);
        return;
      }
      console.log("Generated logo.svg");
    });
  }

function init() {
    inquirer.prompt(questions).then((answers) => {
  
      writeToFile("./examples/logo.svg", genMd.generateSVG(answers));
  
    });
  }