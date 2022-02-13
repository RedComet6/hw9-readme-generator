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
        name: "screenshotLoc",
        type: "input",
        message: "Enter the file location of a screenshot (location relative to current folder):",
        default: "",
    },
    {
        name: "repoLoc",
        type: "input",
        message: "Enter the URL of the GitHub Repository:",
        validate: function (input) {
            const valid = input.startsWith("https://");
            return valid || "Please enter a valid website";
        },
    },
    {
        name: "pagesLoc",
        type: "input",
        message: "Enter the URL of the GitHub Pages:",
        validate: function (input) {
            const valid = input.startsWith("https://");
            return valid || "Please enter a valid website";
        },
    },
    {
        name: "contactName",
        type: "input",
        message: "Enter the name of who can be contacted with questions:",
    },
    {
        name: "contactEmail",
        type: "input",
        message: "Enter the contact's email address:",
    },
    {
        name: "contactGitHub",
        type: "input",
        message: "Enter the contact's GitHub Username",
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown(answers));
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Success!")));
}
