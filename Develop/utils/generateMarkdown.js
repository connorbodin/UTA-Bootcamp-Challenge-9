// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  ## Description:
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Websites](#websites)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contributor}
  ## Test
  ${data.test}
  ## Websites
  ${data.description}
  ## License
  ${renderLicenseSection(data.license)}
  ## Questions
  If you have additional questions please contact me at ${data.email}, or if you want to see more of my work you can find them at https://github.com/${data.username} 
  `;
}

module.exports = generateMarkdown;