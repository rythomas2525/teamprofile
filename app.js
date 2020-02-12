const fs = require("fs")
const inquirer = require("inquirer")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const generateHTMLscript = require("./generateHTMLscript")
const util = require("util");

console.log(generateHTMLscript);

const writeFileAsync = util.promisify(fs.writeFile)

var arr = []


const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID?"
    }, {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is your job role?",
        choices: ["Manager", "Intern", "Engineer"]

    }




];

const InternQuestion = [
    {
        type: "input",
        name: "school",
        message: "What School did you go to?"
    }];

const managerQuestion = [

    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    }
];

const engineerQuestion = [

    {
        type: "input",
        name: "github",
        message: "What is your github?"
    }
];

console.log("65")


inquirer.prompt(questions).then(function ({ name, id, email, role }) {
    var teamstring = ""


    if (role === "Intern") {

        inquirer.prompt(InternQuestion).then(function (school) {
            const intern = new Intern(name, id, email, school, role)
            arr.push(intern)

        })


    };

    if (role === "Manager") {
        inquirer.prompt(managerQuestion).then(function (officeNumber) {


            const manager = new Manager(name, id, email, officeNumber, role)
            arr.push(manager)
            for (let i = 0; i < arr.length; i++) {

                teamstring = teamstring + generateHTMLscript.generateCard(arr[i])
                var finalHTML = generateHTMLscript.generateHTML(teamstring)

                writeFileAsync("./output/final.html", finalHTML)

            }




        })
    };

    if (role === "Engineer") {
        inquirer.prompt(engineerQuestion)

    }





    // for (let i = 0; i < arr.length; i++) {
    //     console.log("343")
    //     teamstring = teamstring + generateHTMLscript.generateCard(arr[i])


    // }


});







// var finalHTML = generateHTMLscript.generateHTML(teamstring)







