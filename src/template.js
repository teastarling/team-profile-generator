const index = require('../index');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const generateHTML = (manager, engineer, intern) =>

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <title>Document</title>
</head>
<body>
    <div class="jumbotron text-center jumbotron-fluid bg-danger">
        <div class="container">
          <h1 class="display-5 text-white">My Team</h1>
        </div>
    </div>

    <div class="container">
        <div class="row justify-content-center">

            <div class="col pt-2">
                <div class="card" style="width: 18rem;">
                    <div class="card-header bg-primary text-white">
                    ${manager[0].getName()}: ${manager[0].getRole()}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager[0].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager[0].getEmail()}">${manager[0].getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager[0].getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}

        </div>
    </div>       
</body>
</html>`;

const generateEngineer = (engineer) => {
    let engineerText = ``
    engineer.forEach(element => {
     engineerText +=  `<div class="col pt-2">
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                ${element.getName()}: ${element.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${element.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${element.getGithub()}">${element.getGithub()}</a></li>
                </ul>
            </div>
        </div>`
    });
    return engineerText;
}

const generateIntern = (intern) => {
    let internText =   ``
    intern.forEach(element => {
    internText += `<div class="col pt-2">
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                ${element.getName()}: ${element.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${element.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                    <li class="list-group-item">School: ${element.getSchool()}</li>
                </ul>
            </div>
        </div>`
    }); 
    return internText;
}

module.exports = {generateHTML, generateEngineer, generateIntern};