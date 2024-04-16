#! /usr/bin/env node

//Import Inquirer

import inquirer from "inquirer"

console.log(`\n \t ****Currency Converter**** \t \n`);
//Save currency rates 
let currency_rates:any = {
    EU : 1 , //Base Currency
    USD : 1.0656 ,
    GBP : 1.3456 ,
    JPY : 125.00 ,
    CNY : 7.00 ,
    INR : 67.00 ,
    PKR : 296.05 
}
 
let user_input = await inquirer.prompt(
    [
        {
            name : `From`,
            message : `Enter From Currency`,
            type : `list`,
            choices :[`EU`, `USD`, `GBP`, `JPY`, `CNY`, `INR`, `PKR` ]

        },
        {
            name : `To`,
            message : `Enter To Currency`,
            type : `list`,
            choices :[`EU`, `USD`, `GBP`, `JPY`, `CNY`, `INR`, `PKR` ]
        
        },
        {
            name : `Amount`,
            message : `Enter Your Amount`,
            type :  `number`
              
        
        }
    ]
)
//Get from amount from user
let from_Amount = currency_rates[user_input.From]
//Get to amount from user
let to_Amount = currency_rates[user_input.To]
//Get amount from user
let amount = user_input.Amount
//Divide user amount from From Amount
let base_Amount = amount / from_Amount
//Multiply base amount from to amount
let converted_Amount = base_Amount * to_Amount
//Round figure
 let round_Num = converted_Amount.toFixed(0)
console.log(round_Num);


 




 


