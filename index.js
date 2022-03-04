// Packages needed for this application
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const genTeam = require('./dist/genTeam');

// Empty varibale to store newTeam array data
newTeam = [];

// Function to start inquirer prompt for user data input with managerQuestions
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team manager\'s name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter team manager\'s id number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter team manager\'s email',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter team manager\'s office number',
        },
        {
            type: 'list',
            name: 'addRole',
            message: 'Select team member to add',
            choices: ['Manager', 'Engineer', 'Intern', 'All done! no more team members to add'],
        }
    ])
    // then push data to newTeam and continue with next funtion selected
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
        newTeam.push(manager)
        switch(managerAnswers.addRole) {
            case 'Manager':
                managerQuestions ();
                break;

            case 'Engineer':
                engineerQuestions ();
                break;

            case 'Intern':
                internQuestions ();
                break;

            default:
                writeToFile('dist/index.html', genTeam(newTeam))
        }
    });
};

const engineerQuestions = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineer\'s name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineer\'s id number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer\'s email',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter engineer\'s github',
        },
        {
            type: 'list',
            name: 'addRole',
            message: 'Select team member to add',
            choices: ['Manager', 'Engineer', 'Intern', 'All done! no more team members to add'],
        }
    ])
       // then push data to newTeam and continue with next funtion selected
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub)
        newTeam.push(engineer)
        switch(engineerAnswers.addRole) {
            case 'Manager':
                managerQuestions ();
                break;

            case 'Engineer':
                engineerQuestions ();
                break;

            case 'Intern':
                internQuestions ();
                break;

            default: 
                writeToFile('dist/index.html', genTeam(newTeam))
        }
    });
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter interns\'s name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter intern\'s id number'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern\'s email'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern\'s school'
        },
        {
            type: 'list',
            name: 'addRole',
            message: 'Select team member to add',
            choices: ['Manager', 'Engineer', 'Intern', 'All done! no more team members to add'],
        }
    ])
       // then push data to newTeam and continue with next funtion selected
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
        newTeam.push(intern)
        switch(internAnswers.addRole) {
            case 'Manager':
                managerQuestions ();
                break;

            case 'Engineer':
                engineerQuestions ();
                break;

            case 'Intern':
                internQuestions ();
                break;

            default:
                writeToFile('dist/index.html', genTeam(newTeam))
        }
    });
};
// Call function to start questions with node
managerQuestions ();

// function to write file with genTeam.js
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('index.html file saved in dist folder')
    });
};
