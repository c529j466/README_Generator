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
      name: 'contributing',
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
    },
    {
      type: 'input',
      message: 'Instructions on how to contact you for questions?',
      name: 'contact',
    }
])
.then((response)=> {
    const ReadMeDoc = 

`# <${response.title}>

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Licenses](#licenses)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description <a name='description'></a>

${response.description}

## Installation <a name='installation'></a>

${response.installation}

## Usage <a name='usage'></a>

${response.usage}

## Licenses <a name='licenses'></a>

Licenses Used: ${response.licenses}

## Contributing <a name='contributing'></a>

${response.contributing}

## Tests <a name='tests'></a>

${response.tests}

## Questions <a name='questions'></a>

GitHub: [${response.Github}](https://github.com/${response.Github})

Email: ${response.email}

${response.contact}

`
fs.writeFile('Example-README.md', ReadMeDoc, (err)=>
err ? console.error(err) : console.log('Success!'))
});

