// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   const licenseType = license[0];
//   var licenseString = "";
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
`##Title
${data.Title}

## Table of Contents
* [Description]{#description}
* [Installation]{#Installation}
* [Usage]{#Usage}
* [License]{#License}
* [Contributors]{#contributors}
* [Test]{#test}

## Description
${data.Description}

## Installation Instruction
${data.Usage}

## License
${data.License}

## Contributors
${data.Contributors}

## Test
${data.Test}

## Questions
If anyone has any questions about this app, please contact me via GitHub or email:

#GitHub: ${data.username}(https://github.com/GKFitz)

#Email: ${data.email}(gkf2103@gmail.com)
`;}
module.exports = generateMarkdown;

