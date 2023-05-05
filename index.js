const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const greenify = (text) => `\x1b[32m${text}\x1b[0m\x1b[1m`;
const questions = [
  {
    name: "title",
    type: "input",
    message: `The ${greenify("title")} of your project:`,
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
    validate: answer => {
      if (answer && (!answer.includes("@") || !answer.includes("."))) return "Please enter a valid email address.";
      return true;
    }
  },
  {
    name: "description",
    type: "input",
    message: `A brief ${greenify("description")} of your project:`,
  },
  {
    name: "installation",
    type: "input",
    message: `Instructions on ${greenify("how to install")} your project:`,
  },
  {
    name: "usage",
    type: "input",
    message: `Instructions and examples on ${greenify(
      "how to use"
    )} your project:`,
  },
  {
    name: "contribute",
    type: "input",
    message: `Guidelines on ${greenify("contributing")} to your project:`,
  },
  {
    name: "tests",
    type: "input",
    message: `Instructions on ${greenify(
      "how to run tests"
    )} included with your project:`,
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
    ],
  },
  {
    name: "confirm",
    type: "confirm",
    message: "\x1b[35mAre the above details correct?\x1b[0m",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    console.error(err);
  })
}

// TODO: Create a function to initialize app
function init() {
  console.log(
    "\x1b[1m\x1b[35m|==========| README Generator |==========|\x1b[0m"
  );
  console.log(
    "\x1b[95mUse the following prompts to generate a README.md for your project."
  );
  inquirer.prompt(questions).then((answers) => {
    const content = generateMarkdown(answers);
    writeToFile("./README.md", content);
  });
}

// Function call to initialize app
init();

//
