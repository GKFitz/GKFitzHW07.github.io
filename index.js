// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util =require('util');
const path = require("path");

const generatorMarkdown = require("./util/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"

}, {
    type: "input",
    message: "What is your project about? Give a detailed description:",
    name: "Description"
}, {
    
    type: "input",
    message: "What does your user or another developer need to run this app?",
    name: "Installation"
}, {
    type: "input",
    message: "How is this app used? Explain how.",
    name: "Usage"
}, {
    
    type: "checkbox",
    message: "What license are you using? (example:...MIT)",
    name: "License",
    choices: [
        "MIT",
        "GNU GPLv3",
        "Apache",
        "Mozilla",
        "None"
    ]
    
}, {
    
    type: "input",
    message: "Who are the contributors on this project?",
    name: "Contributors"

}, {
    
    type: "input",
    message: "How do you test this app?",
    name: "Test"
}, {
    
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
}, {
    type: "input",
    message: "What is your email address?",
    name: "email"

}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        if(err) {
            return console.log("err")
        }
    })
    

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)
        })


    

}

// Function call to initialize app
init();
