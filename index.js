const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "readmeTitle",
        type: "input",
        message: "Enter a title to header your ReadMe file:",
    },
    {
        name: "description",
        type: "input",
        message: "Enter a description of the content your ReadMe is associated with:",
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README_NEW.md", generateMarkdown(answers));
});

// TODO: Include packages needed for this application

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Success!")));
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// # READMENAME

// ## Table of Contents

// * [Description](./README.md#description)
// * [Installation](./README.md#installation)
// * [Usage](./README.md#usage)
// * [License](./README.md#license)
// * [Contributing](./README.md#contributing)
// * [Tests](./README.md#tests)
// * [Screenshot](./README.md#screenshot)
// * [Links to Application](./README.md#links-to-application)
// * [Questions](./README.md#questions)

// ## Description

// ## Installation

// ## Usage

// ## License

// ## Contributing

// ## Tests

// ## Screenshot

// ![A screenshot of the website](SCREENSHOTLOC)

// ## Links to Application

// -   Here is the repo: [RedComet6/READMENAME](REPOLOC)
// -   Here is the pages: [RedComet6 READMENAME Pages](PAGESLOC)

// ## Questions
// If you have any questions, you may contact:
