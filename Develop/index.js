// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "Enter the title of your project.",
  },
  {
    name: "username",
    type: "input",
    message: "What is your GitHub username?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
  {
    name: "description",
    type: "input",
    message: "Enter a description of your project.",
  },
  {
    name: "installation",
    type: "input",
    message: "Explain how to install your project.",
  },
  {
    name: "usage",
    type: "input",
    message: "Describe how to use your project.",
  },
  {
    name: "contribution",
    type: "input",
    message: "Enter guidelines on how to contribute to your project.",
  },
  {
    name: "tests",
    type: "input",
    message: "",
  },
  {
    name: "license",
    type: "input",
    message: "Which license is your project covered under?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
