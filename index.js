const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const genTeam = require('./dist/genTeam');


newTeam = [];

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
            name: 'addTeam',
            message: 'Select team member to add',
            choices: ['Engineer', 'Intern', 'All done! no more team members to add'],
        }
    ])
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
        newTeam.push(manager)
        switch(managerAnswers.addTeam) {
            case 'Engineer':
                engineerQuestions ();
                break;
            case 'Intern':
                internQuestions ();
                break;

                default:
                    writeToFile('dist/index.html', genTeam(newTeam))
        }
    })
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
            name: 'addMember',
            message: 'Select team member to add',
            choices: ['Engineer', 'Intern', 'All done! no more team members to add'],
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub)
        newTeam.push(engineer)
        switch(engineerAnswers.addTeam) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;

                default: 
                writeToFile('dist/index.html', genTeam(newTeam))
        }
    })
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
            name: 'addMember',
            message: 'Select team member to add',
            choices: ['Engineer', 'Intern', 'All done! no more team members to add'],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
        newTeam.push(intern)
        switch(internAnswers.addTeam) {
            case 'Engineer':
                engineerQuestions ();
                break;
            case 'Intern':
                internQuestions ();
                break;

                default:
                    writeToFile('dist/index.html', genTeam(newTeam))
        }
    })
};

managerQuestions ();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};
