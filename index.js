const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        name: "readmeName",
        type: "input",
        message: "Enter a name for your ReadMe file:",
    },
    {
        name: "description",
        type: "input",
        message: "Enter a description of the content your ReadMe is associated with:",
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
]);

// # READMENAME

// ## Description

// DESCRIPTION

// ## Screenshot

// ![A screenshot of the website](SCREENSHOTLOC)

// ## Links to Application

// -   Here is the repo: [RedComet6/READMENAME](REPOLOC)
// -   Here is the pages: [RedComet6 READMENAME Pages](PAGESLOC)
