// Linking in fileshare and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

// This creates the prompt questions for the readme
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



// This uses the user responses and then adds them into the readme template created with template literals
.then((response)=> {
  if (response.licenses === 'BSD') {
    var badge = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
  }
  
  const ReadMeDoc = 

`# ${response.title}
[!["BSD License"](${badge})

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

// This creates the readme file using the above template and logs success or error based on its success in the command line
fs.writeFile('Example-README.md', ReadMeDoc, (err)=>
err ? console.error(err) : console.log('Success!'))
});

