const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const greenify = text => `\x1b[32m${text}\x1b[0m\x1b[1m`;
const questions = [
  {
    name: "title",
    type: "input",
    message: `The ${greenify("title")} of your project:`,
    validate: answer => {
      if (!answer) return "Please enter a title.";
      return true;
    },
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
      if (answer && (!answer.includes("@") || !answer.includes(".")))
        return "Please enter a valid email address.";
      return true;
    },
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
    name: "contributing",
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
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    err
      ? console.error(err)
      : console.log("\x1b[1m\x1b[35mREADME.md created in ./output/");
  });
}

function init() {
  console.log(
    `\x1b[1m\x1b[35m|==========| README Generator |==========|\x1b[0m\n\x1b[95mUse the following prompts to generate a README.md for your project.\nLeave a prompt blank to exclude that section from your README.`
  );
  inquirer.prompt(questions).then(answers => {
    writeToFile("output/README.md", generateMarkdown(answers));
  });
}

init();
