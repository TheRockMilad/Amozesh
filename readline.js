const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what's your name our teacher ? ", (answer) => {
  //TODO :log the answer in adatabase
  console.log(`your teacher : ${answer}`);

  console.log("ok! please enter students name : ");
});

const student = [];
rl.on("line", (input) => {
  if (input.length < 3) {
    console.log("please enter valid name");
    return;
  }
  if (input == "exit") {
    console.log("goodbye");
    rl.close();
    console.log(`Your Student ${student}`);
    return
  }
  student.push(input);
  console.log(`add ${input} to list`);
  console.log("we have " + student.length + " now");
});

rl.on("SIGINT",()=>{
    console.log('goodbye');
    rl.close()
    console.log(`Your Student ${student}`);

})

rl.on("history",()=>{
    console.log(' is new student');
})