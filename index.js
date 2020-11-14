const inquirer = require('inquirer');
const fs = require('fs');
const { async } = require('rxjs');

async function getUserInput() {

    try {
        const data = await inquirer.prompt([{
            type: "input",
            message: "Application name: ",
            name: 'name',
        },
        {
            type: "input",
            message: "Application description: ",
            name: 'description',
        },
        {
            type: "input",
            message: "Installation Instructions: ",
            name: 'installation',
        },
        {
            type: "input",
            message: "Usage Instructions: ",
            name: 'usage',
        },
        {
            type: "input",
            message: "Contribution guidelines: ",
            name: 'contribution',
        },
        {
            type: "input",
            message: "Testing instructions: ",
            name: 'test',
        },
        {
            type: "list",
            message: "Choose a license: ",
            name: "licenses",
            choices: [
                "Apache License 2.0",
                "GNU Lesser General Public License v2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD 2-Clause 'Simplified' License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "Mozilla Public License 2.0",
                "The Unlicense"
            ]
        },
        {
            type: "input",
            message: "Enter your email address: ",
            name: 'email',
        },
        {
            type: "input",
            message: "Enter your github username: ",
            name: 'github',
        },
    ]);
    return data;
} catch (error) {
    console.log(error);
}

}

async function writeReadMe() {
    const {
        name,
        description,
        installation,
        usage,
        contribution,
        test,
        licenses,
        email,
        github
    } = await getUserInput();