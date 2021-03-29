// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generatorMarkdownFile = require("./util/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    
    type: "input",
    message: "What is your GitHub username?",
    name: "Username"
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email"

}, {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"

}, {
    type: "input",
    message: "What is your project about? Give a detailed description:",
    name: "Description"
}, {
    
    type: "input",
    message: "Table of Contents.",
    name: "Table of Contents"
}, {
    
    type: "input",
    message: "What does your user or another developer need to run this app?",
    name: "Installation"
}, {
    type: "input",
    message: "How is this app used? Explain how.",
    name: "Usage"
}, {
    
    type: "input",
    message: "What license are you using? (example:...MIT)",
    name: "License"
}, {
    
    type: "input",
    message: "Who are the contributors on this project?",
    name: "Contributors"

}, {
    
    type: "input",
    message: "How do you test this app?",
    name: "Testing"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data())
    if(err) {
        throw console.log(err)
    }

}

// TODO: Create a function to initialize app
function init() {
    

}

// Function call to initialize app
init();
