// team profiles
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Packages needed for app
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require

//Array of questions for employee input 
const questions = [
    {
        //employee name
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        //make sure user entered input
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        //employee ID
        type: 'input',
        name: 'id',
        message: 'What is your ID?',
        //make sure user entered input
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a valid work ID')
            }
        }
    },

];

//Function to generate HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your rockin team profile has been created! Check it out!')
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("HTML", generateHTML(userInput));
        });
};

// Function call to initialize app
init()