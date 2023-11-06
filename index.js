const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

const {Circle, Square, Triangle} = require("./lib/shapes");

const svgPath = path.join(__dirname, "examples", "logo.svg");

const shapeClasses = {
    circle: Circle,
    square: Square,
    triangle: Triangle,
};

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
    .then((responses) =>{
        // creates shape from inquirer prompt responses
        const ShapeClass = shapeClasses[responses.shape];
        const shape = new ShapeClass();

        // uses setColor which was important for the test scripts provided. I would have chose to omit this since we responses.bgColor in line 49
        shape.setColor(responses.bgColor);

        const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <g fill="${responses.bgColor}">
            ${shape.render()}
            <text x="150" y="130" text-anchor="middle" font-size="36" fill="${responses.textColor}">${responses.logoChars}</text>
          </g>
        </svg>`;

        // Write svg to file path 
        fs.writeFile(svgPath, svg, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Generated logo.svg");
            }
        });
    })