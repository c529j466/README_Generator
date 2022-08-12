const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give a description of your project.',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Do you have information on usage?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Do you have any licenses?',
      name: 'licenses',
      choices: ['BSD', 'MIT', 'GPL', 'None'],
    },
    {
      type: 'input',
      message: 'What are the contribution instructions?',
      name: 'contributions',
    },
    {
      type: 'input',
      message: 'Do you have any tests for your project?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'Github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
