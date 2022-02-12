const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "Enter a title to header your ReadMe file:",
    },
    {
        name: "description",
        type: "input",
        message: "Enter a description of your content:",
    },
    {
        name: "installation",
        type: "input",
        message: "Enter instructions for installing your content:",
    },
    {
        name: "usage",
        type: "input",
        message: "Enter instructions for using your content:",
    },
    {
        name: "contributing",
        type: "input",
        message: "Enter instructions for how someone can contribute to your content:",
    },
    {
        name: "tests",
        type: "input",
        message: "Enter instructions for testing your content:",
    },
    {
        name: "contactName",
        type: "input",
        message: "Enter the name of who can be contacted with questions:",
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown(answers));
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
