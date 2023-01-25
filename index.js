// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


console.log('\x1b[36m%s\x1b[0m',`Welcome to my read me generator! Please answer the following questions when prompted to do so`);

const userQuestions = [
      {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of your readme to be?',
        validate:  your_Input => {
          if (your_Input) {
            return true
          } else {
            console.log("Please enter a title to continue!");
            return false
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of the readme for the repository.',
        validate:  your_Input => {
          if (your_Input) {
            return true
          } else {
            console.log("Please enter a brief description, cannot be blank!");
            return false
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter in any installation instructions you might have.',
        validate:  your_Input => {
          if (your_Input) {
            return true
          } else {
            console.log("Please enter installation instructions if you don't have any type N/A!");
            return false
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter in any usage material you may have',
        validate:  your_Input => {
          if (your_Input) {
            return true
          } else {
            console.log("Please enter usage for the material if any or if not type N/A!");
            return false
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Do you have any test instructions?',
        validate:  your_Input => {
          if (your_Input) {
            return true
          } else {
            console.log("If no test instructions please type N/A");
            return false
          }
        }
      },
      {
        type: 'input',
        name: 'contributor',
        message: 'Do you have any contributors you would like to add? Please enter their github usernames.',
        validate:  your_Input => {
          if (your_Input) {
            return true
          } else {
            console.log("If 0 contributors please type N/A");
            return false
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter in any usage material you may have',
        validate:  your_Input => {
          if (your_Input) {
            return true
          } else {
            console.log("If no usage material to add please type N/A");
            return false
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a github license option from the list below.',
        choices: ["MIT", "Apache-2.0", "GPL-3.0",""]
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate:  your_Input => {
          if (your_Input) {
            return true
          } else {
            console.log("Please enter a github username!");
            return false
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate:  your_Input => {
          if (your_Input) {
            return true
          } else {
            console.log("Please enter an email address!");
            return false
          }
        }
      }, 
];

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
      if (err) {
          return console.log(err);
      }
 
      console.log("Successfully written to file!");
  })
};

function init() {
  inquirer.prompt(userQuestions).then((response) => {
    console.log(response) 
    writeToFile("README.md", generateMarkdown(response)); 
  });

}

init();
// Function call to initialize app
