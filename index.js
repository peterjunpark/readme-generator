const inquirer = require("inquirer");
const fs = require("fs");

const greenify = text => `\x1b[32m${text}\x1b[0m\x1b[1m`

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: `The ${greenify("title")} of your project:`,
  },
  {
    name: "repo",
    type: "input",
    message: `The ${greenify("name of your project's GitHub repository")}:`,
  },
  {
    name: "username",
    type: "input",
    message: `Your ${greenify("GitHub username")}:`,
  },
  {
    name: "email",
    type: "input",
    message: `Your ${greenify("email address")}:`,
  },
  {
    name: "description",
    type: "input",
    message: `A brief ${greenify("description")} of your project:`,
  },
  {
    name: "installation",
    type: "input",
    message: `${greenify("Installation instructions")} to get started with your project:`,
  },
  {
    name: "usage",
    type: "input",
    message: `Instructions and examples on ${greenify("how to use")} your project:`,
  },
  {
    name: "contribution",
    type: "input",
    message: `${greenify("Contribution guidelines")} for your project:`,
  },
  {
    name: "tests",
    type: "input",
    message: `Instructions on ${greenify("how to run tests")} included with your project:`,
  },
  {
    name: "license",
    type: "list",
    message: `The ${greenify("license")} your project is covered under:`,
    choices: [
      "Apache License 2.0",
      "GNU GPL v2",
      "GNU GPL v3",
      "ISC License",
      "MIT License",
    ]
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    console.log(answers);
  })
}

// Function call to initialize app
init();

//
