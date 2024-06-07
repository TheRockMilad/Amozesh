//روش اول

// console.log('\x1b[32mMilad');       // عادی
// console.log('\x1b[32;1mMilad');     //bold
// console.log('\x1b[32;2mMilad');     //low
// console.log('\x1b[32;3mMilad');     //itlic
// console.log('\x1b[32;4mMilad');     //underline

// console.log("\x1b[31;1mMilad");
// console.log("\x1b[0mReset");

//      regular color
//      \x1b[30m	Black               m => X ;1m  ام اولی حذف به اخری اضافه میشه
//      \x1b[31m	Red
//      \x1b[32m	Green
//      \x1b[33m	Yellow
//      \x1b[34m	Blue
//      \x1b[35m	Purple
//      \x1b[36m	Cyan
//      \x1b[37m	White

//      ;1m    bold
//      ;2m    low
//      ;3m   italic
//      ;4m    underline

//روش دوم
//Chalk Package

import chalk from "chalk";

const log = console.log;

log(chalk.blue("Hello ") + "world" + chalk.red("!"));
log(chalk.green("Hello ") + chalk.underline.bgBlue("world") + "!");
log(chalk.red("Hello", "world", "Milad", "Hosseini"));
