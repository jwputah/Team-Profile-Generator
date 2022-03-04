const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');


function genCards(team) {
    let cards = []
    for (let i = 0; i < team.length; i++) {
        const teamArray = team[i];
        switch (teamArray.getRole()) {
            case 'Manager':
                const manager = new Manager(teamArray.name, teamArray.id, teamArray.email, teamArray.officeNumber);
                cards.push(genManagerCard(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(teamArray.name, teamArray.id, teamArray.email, teamArray.gitHub);
                cards.push(genEngineerCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(teamArray.name, teamArray.id, teamArray.email, teamArray.school);
                cards.push(genInternCard(intern));
                break;
        }
    }
    return cards.join(``)
}

function genTeam(team) {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-warning">
    <div class="container">
        <h1 class="display-4 text-center text-dark">Team Profile</h1>
    </div>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
    ${genCards(team)}
</div>
</body>
</html>`
}

let genManagerCard = (Manager) => {
return `
<div class="card m-1 shadow" style="width: 25rem">
    <div class='card-header bg-success text-dark'>
        <h2 class="card-title">${Manager.name}</h2>
        <h4 class="card-text"><i class="fa fa-bullhorn"></i> ${Manager.getRole()}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${Manager.id}</li>
            <li class="list-group-item"><a href => ${Manager.email}</a></li>
            <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
        </ul>
    </div>
</div>`
}

let genEngineerCard = (Engineer) => {
return `
<div class="card m-1 shadow" style="width: 25rem">
    <div class='card-header bg-success text-dark'>
        <h2 class="card-title">${Engineer.name}</h2>
        <h4 class="card-text"><i class="fa fa-line-chart"></i> ${Engineer.getRole()}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${Engineer.id}</li>
            <li class="list-group-item"><a href => ${Engineer.email}</a></li>
            <li class="list-group-item">GitHub:<a href => ${Engineer.gitHub}</a></li>
        </ul>
    </div>
</div>`
}

let genInternCard = (Intern) => {
return `
<div class="card m-1 shadow" style="width: 25rem">
    <div class='card-header bg-success text-dark'>
        <h2 class="card-title">${Intern.name}</h2>
        <h4 class="card-text"><i class="fa fa-university"></i> ${Intern.getRole()}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${Intern.id}</li>
            <li class="list-group-item"><a href => ${Intern.email}</a></li>
            <li class="list-group-item">School: ${Intern.school}</li>
        </ul>
    </div>
</div>`
}

module.exports = genTeam;