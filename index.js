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
        default: "",
    },
    {
        name: "installation",
        type: "input",
        message: "Enter instructions for installing your content:",
        default: "",
    },
    {
        name: "usage",
        type: "input",
        message: "Enter instructions for using your content:",
        default: "",
    },
    {
        name: "license",
        type: "list",
        message: "Choose which license applies:",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        name: "contributing",
        type: "input",
        message: "Enter instructions for how someone can contribute to your content:",
        default: "",
    },
    {
        name: "tests",
        type: "input",
        message: "Enter instructions for testing your content:",
        default: "",
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
        message: "Enter the URL of the GitHub Repository (include https://):",
        default: "https://www.github.com",
        validate: function (input) {
            const valid = input.startsWith("https://");
            return valid || "Please enter a valid website";
        },
    },
    {
        name: "pagesLoc",
        type: "input",
        message: "Enter the URL of the GitHub Pages (include https://):",
        default: "https://www.github.com",
        validate: function (input) {
            const valid = input.startsWith("https://");
            return valid || "Please enter a valid website";
        },
    },
    {
        name: "contactName",
        type: "input",
        message: "Enter the name of who can be contacted with questions:",
        default: "",
    },
    {
        name: "contactEmail",
        type: "input",
        message: "Enter the contact's email address:",
        default: "",
    },
    {
        name: "contactGitHub",
        type: "input",
        message: "Enter the contact's GitHub Username",
        default: "",
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
