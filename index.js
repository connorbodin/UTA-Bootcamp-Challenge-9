// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


console.log('\x1b[36m%s\x1b[0m',`Welcome to my read me generator! Please answer the following questions when prompted to do so`);

// TODO: Create an array of questions for user input
const userQuestions = [
      {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of your readme to be?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of the readme for the repository.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter in any installation instructions you might have.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter in any usage material you may have',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Do you have any test instructions?',
      },
      {
        type: 'input',
        name: 'contributor',
        message: 'Do you have any contributors you would like to add? Please enter their github usernames.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter in any usage material you may have',
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
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      }, 
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
      if (err) {
          return console.log(err);
      }
 
      console.log("Successfully written to file!");
  })
};




// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(userQuestions).then((response) => {
    console.log(response) 
    writeToFile("README.md", generateMarkdown(response)); 
  });

}
// // function init() {
// //   inquirer.prompt(questions).then((response) => {
// //     console.log(response) 
// //     writeToFile("README.md", generateMarkDown(response)); 
// //   });


init();
// Function call to initialize app
