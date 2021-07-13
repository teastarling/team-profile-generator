const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const htmlTemplate = require('./src/template');

const teamQuestion = [{ 
    type: 'list',
    message: "Which type of team member would you like to add?",
    list: ['Engineer', 'Intern', "I don't want to add any more team members"],
    name: 'team'
}];

const managerQuestions = [{
    type: 'input',
    message: "What is the team manager's name?",
    name: 'name',
},
{
    type: 'input',
    message: "What is the team manager's id?",
    name: 'id',
},
{
    type: 'input',
    message: "What is the team manager's email?",
    name: 'email',
},
{
    type: 'input',
    message: "What is the team manager's office number?",
    name: 'office',
}];

const engineerQuestions = [{
    type: 'input',
    message: "What is your engineer's name?",
    name: 'name',
},
{
    type: 'input',
    message: "What is your engineer's id?",
    name: 'id',
},
{
    type: 'input',
    message: "What is your engineer's email?",
    name: 'email',
},
{
    type: 'input',
    message: "What is your engineer's GitHub username?",
    name: 'github',
}];

const internQuestions = [{
    type: 'input',
    message: "What is your intern's name?",
    name: 'name',
},
{
    type: 'input',
    message: "What is your intern's id?",
    name: 'id',
},
{
    type: 'input',
    message: "What is your intern's email?",
    name: 'email',
},
{
    type: 'input',
    message: "What is your intern's school?",
    name: 'school',
}];



function init() {
    inquirer.prompt(managerQuestions)
        .then((data) => { 
            const manager = new Manager(data.name, data.id, data.email, data.office)
            const htmlContent = htmlTemplate.generateHTML(manager);
            fs.writeFile('sampleIndex.html', htmlContent, (err) =>
            err ? console.log(err) : console.log("Successfully created Team Profile!"))     
        });
};


init();