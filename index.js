const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
        type: 'input',
        name: 'logoChars',
        message: 'What characters (max is 3) do you want on your logo?',
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'What color (or hexadecimal number) do you want the logo characters to be?'
        },
        {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle','triangle','square'],
        },
        {
        type: 'input',
        name: 'bgColor',
        message: 'What color (or hexadecimal number) do you want the logo background to be?'
        },
    ])
    .then((response) =>{
        console.log(response);
    })