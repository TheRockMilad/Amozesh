const inquirer = require('inquirer');

 let questions =[
    {
        type:"input",
        name: "firstQ",
        message : "What's your name?"
    }
 ]

 inquirer.prompt(questions).then(answer => {
    console.log(answer);
 });

 // تمام کد ها توی این آدرس هستش
 // https://github.com/SBoudrias/Inquirer.js.git 
