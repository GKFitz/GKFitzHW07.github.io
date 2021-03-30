// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(data) {
  const licenseType = data.License[0];
  var licenseString = " ";
  if(licenseType === "MIT"){
    licenseString = `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`

  };
  if(licenseType === "GNU GPLv3"){
    licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`

  };
  if(licenseType === "Apache 2.0 License"){
    licenseString = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if(licenseType === "Mozilla Public License 2.0"){
    licenseString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  };
 return licenseString
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {


// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   renderLicenseBadge
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ##Title 
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
${licenseBadge(data)}

## Contributors
${data.Contributors}

## Test
${data.Test}

## Questions
If anyone has any questions about this app, please contact me via GitHub or email:

#GitHub: [https://github.com/${data.username}](https://github.com/${data.username})

#Email: [${data.email}](${data.email})
`}

module.exports = generateMarkdown;

