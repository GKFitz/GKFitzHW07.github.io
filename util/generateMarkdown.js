
function licenseBadge(data) {
  const licenseType = data.License[0];
  var licenseString = " ";
  if(licenseType === "MIT"){
    licenseString = `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`

  };
  if(licenseType === "GNU GPLv3"){
    licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`

  };
  if(licenseType === "Apache 2.0"){
    licenseString = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if(licenseType === "Mozilla"){
    licenseString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  };
 return licenseString
};

function generateMarkdown(data) {
  return `##Title 
${data.Title}

## Description
${data.Description}

## License
${licenseBadge(data)}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Test](#Test)


## Installation Instruction
${data.Usage}

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

