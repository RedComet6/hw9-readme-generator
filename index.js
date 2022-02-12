const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
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
    {
        name: "installation",
        type: "input",
        message: "Enter the installation information needed for your content:",
    },
    {
        name: "usage",
        type: "input",
        message: "Describe how to operate the content associated with your ReadMe:",
    },
    {
        name: "license",
        type: "list",
        message: "What license does your content fall under?",
        choices: ["A", "B", "C", "D"],
    },
    {
        name: "contributing",
        type: "input",
        message: "Who has contributed to your content?",
    },
    {
        name: "tests",
        type: "input",
        message: "Explain some tests cases for your content:",
    },
    {
        name: "screenshotLoc",
        type: "input",
        message: "Enter the file location of a screenshot of your ReadMe's associated content:",
    },
    {
        name: "repoLoc",
        type: "input",
        message: "Enter the URL of the GitHub Repository for your content:",
        validate: function (input) {
            const valid = input.startsWith("https://www.");
            return valid || "Please enter a valid website";
        },
    },
    {
        name: "pagesLoc",
        type: "input",
        message: "Enter the URL of the GitHub Pages for your content:",
        validate: function (input) {
            const valid = input.startsWith("https://www.");
            return valid || "Please enter a valid website";
        },
    },
    {
        name: "contactName",
        type: "input",
        message: "Who can a user with questions contact?",
    },
    {
        name: "contactEmail",
        type: "input",
        message: "What is the contact individual's email address?",
    },
    {
        name: "contactGitHub",
        type: "input",
        message: "what is the contact individual's GitHub profile URL?",
        validate: function (input) {
            const valid = input.startsWith("https://www.");
            return valid || "Please enter a valid website";
        },
    },
]);

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
