// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "APACHE 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GPL 3.0") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "BSD 3") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (license === "None") {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return "";
    } else {
        return `
* [License](./README.md#license)`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "MIT") {
        return `## License
This software licensed to MIT, for more information you may visit this link:
[MIT License Wikipedia}](https://en.wikipedia.org/wiki/MIT_License)
`;
    } else if (license === "APACHE 2.0") {
        return `This software licensed to APACHE 2.0, for more information you may visit this link:
[APACHE License Wikipedia}](https://en.wikipedia.org/wiki/Apache_License)
`;
    } else if (license === "GPL 3.0") {
        return `This software licensed to GPL 3.0, for more information you may visit this link:
[GNU General Public License Wikipedia}](https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_3)
`;
    } else if (license === "BSD 3") {
        return `This software licensed to BSD 3, for more information you may visit this link:
[BSD License Wikipedia}](https://en.wikipedia.org/wiki/BSD_licenses#3-clause)
`;
    } else if (license === "None") {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const badge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);
    const licenseSection = renderLicenseSection(data.license);
    return `# ${data.title} ${badge}

## Table of Contents:
* [Description](./README.md#description)
* [Installation](./README.md#installation)
* [Usage](./README.md#usage)${licenseLink}
* [Contributing](./README.md#contributing)
* [Tests](./README.md#tests)
* [Screenshot](./README.md#screenshot)
* [Links to Application](./README.md#links-to-application)
* [Questions](./README.md#questions)
    
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}
${licenseSection}
## Contributing
${data.contributing}

## Tests
${data.tests}

## Screenshot
    
![](${data.screenshotLoc})
    
## Links to Application
    
-   Here is the repo: [${data.repoLoc}](${data.repoLoc})
-   Here is the pages: [${data.pagesLoc}](${data.pagesLoc})
    
## Questions
If you have any questions, you may contact:

#### ${data.contactName}
Email: ${data.contactEmail}  
Github Profile: [https://www.github.com/${data.contactGitHub}](https://www.github.com/${data.contactGitHub})`;
}

module.exports = generateMarkdown;
