import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyan("\n\t\t -----WELLCOME TO THE NUMBER GUESSING GAME----- \t\n "));
let compgenrate = Math.floor(Math.random() * 6 + 1);
let userguess = await inquirer.prompt([{
        name: "usergenerate",
        type: "number",
        message: "please guess any number between 1 to 6 : "
    }]);
if (compgenrate == userguess.usergenerate) {
    console.log(chalk.magenta("\nwow you guess the right number congratulations !!"));
}
else {
    console.log(chalk.red("oops!! that's not right try again !"));
}
