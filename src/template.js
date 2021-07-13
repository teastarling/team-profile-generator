const index = require('../index');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const generateHTML = (manager) =>

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
                    ${manager.getName()}: ${manager.getRole}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>



        </div>
    </div>
        
            
</body>
</html>`;

const generateEngineer = (engineer) => {
    makeEngineer.forEach(element => {
        `<div class="col pt-2">
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                ${engineer.getName()}: ${engineer.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>`
    });
    // append
}

const generateIntern = (intern) => {
    makeIntern.forEach(element => {
        `<div class="col pt-2">
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                ${intern.getName()}: ${intern.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`
    }); 
    // append
}

module.exports = {generateHTML, generateEngineer, generateIntern};