// team profiles
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Packages needed for app
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML')

//Array of questions for employee input 
const questions = [
    {
        //Start of Managers questions
        type: 'input',
        name: 'name',
        message: 'Manager of this team? (Required)',
        //make sure user entered input
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Manager's ID: (Required)",
        //make sure user entered input
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log("Please enter the manager's ID!")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Manager's email: (Required)",
        //make sure user entered input
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter an email!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Manager's office number: (Required)",
        //make sure user entered input
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log('Please enter an office number!')
                return false;
            } else {
                return true;
            }
        }
    },

    //Adding another employee to team profile
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add more team members?',
        default: false
    },
    {
        type: 'list',
        name: 'role',
        message: "Employee's role",
        choices: ['Engineer', 'Intern']
    },
    {
        //employee name
        type: 'input',
        name: 'name',
        message: "Employee's name? (Required)",
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
        message: "Employee's ID: (Required)",
        //make sure user entered input
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log("Please enter the employee's ID!")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        //employee email
        type: 'input',
        name: 'email',
        message: "Employee's email: (Required)",
        //make sure user entered input
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter an email!')
                return false;
            }
        }
    },
    {
        //employee Github Username
        type: 'input',
        name: 'github',
        message: "Employee's GitHub Username: (Required)",
        when: (input) => input.role === 'Engineer',
        //make sure user entered input
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Must enter your GitHub username!');
                return false;
            }
        }
    },
    {
        //employee's school'
        type: 'input',
        name: 'school',
        message: "Intern's school: (Required)",
        when: (input) => input.role === "Intern",
        //make sure user entered input
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's school!")
            }
        }
    }


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