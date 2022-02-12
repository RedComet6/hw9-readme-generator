// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Table of Contents:
* [Description](./README.md#description)
* [Installation](./README.md#installation)
* [Usage](./README.md#usage)
* [License](./README.md#license)
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

## License
    
## Contributing
${data.contributing}

## Tests
${data.tests}

## Screenshot
    
![A screenshot of the content](SCREENSHOTLOC)
    
## Links to Application
    
-   Here is the repo: [RedComet6/${data.title}](https://www.)
-   Here is the pages: [RedComet6 ${data.title} Pages](https://www.)
    
## Questions
If you have any questions, you may contact:

### ${data.contactName}`;
}

module.exports = generateMarkdown;
