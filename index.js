// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },

    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },

    {
        type: "list",
        name: "license",
        message: "What kind of license does your project have?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"],
    },

    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
    },

    {
        type: "input",
        name: "test",
        message: "What command should be run to run test?",
    },

    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this repo?",
    },

    {
        type: "input",
        name: "contributing",
        message: "How can the user contribute to this project?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log(inquirerResponses)
        console.log("generating your readMe");
        writeToFile("readMe.md", generateMarkdown({ ...inquirerResponses }));
    })
}

// Function call to initialize app
init();
