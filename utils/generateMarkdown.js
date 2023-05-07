let tableOfContents = "## Table of Contents\n";

function renderLicenseBadge(license) {
  return license
    ? `https://img.shields.io/badge/License-${license.replace(/\s/g,"%20")}-informational`
    : "";
}

function renderLicenseLink(license) {
  return license
    ? `[![License](${renderLicenseBadge(license)})](#License)`
    : "";
}

function renderLicenseSection(license) {
  return `## License\nThis application is covered under the ${license}. See [LICENSE](./LICENSE) in repo.`;
}

function renderSection(heading, content) {
  heading = heading.charAt(0).toUpperCase() + heading.substring(1);
  tableOfContents += `1. [${heading}](## ${heading})\n`;
  return `## ${heading}\n${content}\n`;
}

function generateMarkdown({ title, username, email, license, ...rest }) {
  // Title, license badge, & table of contents section
  let readme = `# ${title}\n${renderLicenseLink(license)}\n${tableOfContents}`;
  // Main content section
  for (prop in rest) {
    if (rest[prop]) {
      readme += renderSection(prop, rest[prop]);
    }
  }
  // Questions section
  if (email || username) readme += renderLicenseSection(license) + "\n## Questions\n";
  if (email) {
    readme += `If you have any additional questions, please reach out to me via email at [${email}](mailto:${email}).\n\n`;
  }
  if (username) {
    readme += `To see more of my work, check out my GitHub profile: [${username}](https://github.com/${username}).`;
  }
  return readme;
}
module.exports = generateMarkdown;
