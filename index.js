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
      name: 'description',
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
])
.then((response)=> {
    const ReadMeDoc = 
`
#${response.title}

## Table of Contents
1. [Description](#description)
2. Installation
3. Usage
4. Licenses
5. Contributing
6. Tests
7. Questions

## Description <a name='description'></a>

${response.description}
`
fs.appendFile('README.md', ReadMeDoc, (err)=>
err ? console.error(err) : console.log('Success!'))
});

