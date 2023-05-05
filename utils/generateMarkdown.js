// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? `https://img.shields.io/badge/License-${license}-informational` : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? `[![License](${renderLicenseBadge(license)})](#License)` : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  username,
  email,
  desc,
  installation,
  usage,
  contributing,
  tests,
  license
}) {
  let readme = `# ${title}\n## Table of Contents\n`;
  return readme;
}

module.exports = generateMarkdown;
