// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
    return
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}


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
This project is licensed under the ${data.License} license
${data.License}

## Contributors
${data.Contributors}

## Test
${data.Test}

## Questions
If anyone has any questions about this app, please contact me via GitHub or email:

#GitHub: (https://github.com/${data.username})

#Email: ${data.email}
`;}

module.exports = generateMarkdown;

