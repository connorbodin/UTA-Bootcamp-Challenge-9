// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
  return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]\n(https://mit-license.org/)"
  } else if (license === 'Apache-2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.txt"
  } else if(license === "GPL-3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.txt)"
  } else {
    return "";
} }


//License link returned under image with new line

// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
function renderLicenseSection(license) {
  if (!license){
    return ``;
  }else{
    return `This project is under ${license}, for more information please refer to the license badge on top of this README`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

 ## License: ${renderLicenseBadge(response.license)}
 ## Description:
  ${response.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Websites](#websites)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${response.installation}
  ## Usage's
  ${response.usage}
  ## Contribution
  ${response.contributor}
  ## Test
  ${response.test}
  ## Websites
  ${response.description}
  ## License
  * ${renderLicenseSection(response.license)}
  ## Questions
  If you have additional questions please contact me at ${response.email}, or if you want to see more of my work you can find them at https://github.com/${response.username} 
  `;
}

module.exports = generateMarkdown;