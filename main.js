import inquirer from "inquirer";
// for any code there must be some steps to follow
// we are going to make atm app so you should have some idea about ATM and then steps as follow
// 1) my balance
// 2) my pin 
let myBalance = 10000; // Dollar
let myPin = 51214;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check bqlqnce") {
        console.log("yourbalance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
