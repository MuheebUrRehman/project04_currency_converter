#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// welcome message
console.log(
  chalk.blue.bold("\n \t welcome to currency converter by muheeb \n")
);

// giving exchange rate values to an object
let exchange_rate: any = {
  USD: 1,
  EUR: 0.92,
  JPY: 156.16,
  CAD: 1.36,
  AUD: 1.5,
  PKR: 278.54,
};

// taking user input for 'from_amount' , 'to amount' and 'amount'
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

// storing the user defined values
let from_amount = exchange_rate[user_ans.from_currency];
let to_amount = exchange_rate[user_ans.to_currency];
let amount = user_ans.amount;

// applying the formula
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

// displaying the result
console.log(`converted amount= ${converted_amount.toFixed(2)}`);
