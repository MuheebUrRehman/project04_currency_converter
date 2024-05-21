import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t welcome to currency converter by muheeb \n"));
let exchange_rate = {
    USD: 1,
    EUR: 0.92,
    JPY: 156.16,
    CAD: 1.36,
    AUD: 1.50,
    PKR: 278.54,
};
let user_ans = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "enter an amount to convert:",
    },
]);
let from_amount = exchange_rate[user_ans.from_currency];
let to_amount = exchange_rate[user_ans.to_currency];
let amount = user_ans.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`converted amount= ${converted_amount.toFixed(2)}`);
