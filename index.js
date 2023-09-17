// Requred modules
const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Triangle, Square, Circle } = require('./lib/shapes.js');

// This is the array of questions for the user
const questions = [
    {
        type: 'input',
        name: 'color',
        message: 'What is the color of your shape?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to make?',
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        name: 'initials',
        message: 'What three initials would you like to use?',
        maxLength: 3,
    },
];

// This function uses inquirer to prompt the user for input
function createShape() {
    inquirer.prompt(questions).then((answers) => {
        const { color, shape, initials } = answers;
        let shapeObj;
        let x;
        let y;
        // This switch statement determines which shape to create and where to place the initials
        switch (shape) {
            case 'Triangle':
                x = 147;
                y = 135;
                shapeObj = new Triangle(color);
                break;
            case 'Square':
                x = 52;
                y = 69;
                shapeObj = new Square(color);
                break;
            case 'Circle':
                x = 150;
                y = 120;
                shapeObj = new Circle(color);
                break;
            default:
            shapeObj = new Triangle(color);
        }

// SVG template with user-specific data
const svgTemplate = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeObj.render()}
    <text x="${x}" y="${y}" font-size="60" text-anchor="middle" fill="white">${initials}</text>
</svg>
`;
        // This writes the SVG template to a file with the users input
        fs.writeFile(`${shape}Logo.svg`, svgTemplate, (err) => {
            if (err) throw err;
            console.log("Looks like we've got ourselves a 'picture-perfect' creation!");
        });
    });
}
// This calls the createShape function
createShape();
