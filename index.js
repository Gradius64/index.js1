"use strict";
// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
const questions = [
    "Would you like to create a new vehicle or select an existing vehicle?",
    "What type of vehicle would you like to create?",
    
];
// TODO: Create a function to write README file
const content = generateREADME(title, description, installation, usage, license);
fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Error writing README file:', err);
    }
    else {
        console.log('README file has been created successfully!');
    }
});
// TODO: Create a function to initialize app
function init() { }
// Function call to initialize app
init();
