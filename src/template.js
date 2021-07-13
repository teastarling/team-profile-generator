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
    <title>Document</title>
</head>
<body>
    <p>${manager.getName()}</p>
    <p>${manager.getId()}</p>
    <p>${manager.getEmail()}</p>
    <p>${manager.getOfficeNumber()}</p>
</body>
</html>`;

const generateEngineer = () => {
    makeEngineer.forEach(element => {
        `<p>${engineer.getName()}</p>
        <p>${engineer.getId()}</p>
        <p>${engineer.getEmail()}</p>
        <p>${engineer.getGithub()}</p>`
    });
    // append
}

const generateIntern = () => {
    makeIntern.forEach(element => {
        `<p>${intern.getName()}</p>
        <p>${intern.getId()}</p>
        <p>${intern.getEmail()}</p>
        <p>${intern.getSchool()}</p>`
    }); 
    // append
}

module.exports = {generateHTML};