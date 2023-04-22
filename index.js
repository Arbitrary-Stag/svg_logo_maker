const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const shapes = require('./lib/shapes.js');

const questions = [
  { 
    type: 'list',
    message: '',
    name: '',
    choices: ['', '', ''],
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
    },
    { 
    type: 'input',
    name: '',
    message: '',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: '',
    message: '',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
];
