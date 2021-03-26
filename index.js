// team profiles
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Packages needed for app
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Prompt = require('inquirer/lib/prompts/base');
const teamArr = [];

//Array of questions for employee input 
const qManager = () => {
    return inquirer
        .prompt([
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
            }
        ])
};

// const addEmployee = {
//     type: 'list',
//     name: 'teamSize',
//     message: 'Would you like to add another team member to this team?',
//     choices: ['Yes', 'No'],
// };

//Adding another employee to team profile
const qEmployee = () => {
    return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmEmployee',
                message: 'Would you like to add another team member?',
                default: false
            },
            {
                type: 'list',
                name: 'role',
                message: "Employee's role:",
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
            },

        ])
        .then(teamData => {
            //employee types 
    
            let { name, id, email, role, github, school, confirmEmployee } = teamData; 
            let employee; 
    
            if (role === "Engineer") {
                employee = new Engineer (name, id, email, github);
    
                console.log(employee);
    
            } else if (role === "Intern") {
                employee = new Intern (name, id, email, school);
    
                console.log(employee);
            }
    
            teamArr.push(employee); 
    
            if (confirmEmployee) {
                return qEmployee(teamArr); 
            } else {
                return teamArr;
            }
        })
    
    };
    

// function teamSizeInfo() {
//     inquirer.prompt(addEmployee).then((teamSize) => {
//         //if yes
//         if (teamSize.teamSize === 'Yes') {
//             teamMemberLoop();
//         }
//         if (teamSize.teamSize === 'No') {
//             //if no
//             renderHTML(teamMembersArray);
//         }
//     });
// }
//Function to generate HTML file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        //error 
        if (err) {
            console.log(err);
            return;
            //team profile created 
        }
        console.log('Your rockin team profile has been created! Check it out!')
    })
};

// function to initialize program
qManager()
    .then(qEmployee)
    .then(employeeArr => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .catch(err => {
        console.log(err);
    });