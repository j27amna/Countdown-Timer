import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
console.log(chalk.bold.overline.bgBlackBright('\n\t\t\tCOUNTDOWN TIMER\n'));
console.log("=".repeat(76));
const respo = await inquirer.prompt({
    name: "userInput",
    type: "input",
    message: "Enter your time in sec...",
    validate: (input) => {
        if (isNaN(input)) {
            return "Enter Valid Number";
        }
        else if (input > 60) {
            return "Second must be less than or equal to 60.";
        }
        else {
            return true;
        }
    }
});
let input = respo.userInput;
function startTime(value) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log('Time Is Over');
            process.exit();
        }
        const minute = Math.floor(timeDiff % (3600 * 24) / 3600);
        const second = Math.floor(timeDiff % 60);
        console.log(`${minute} : ${second}`);
    }), 1000);
}
startTime(input);
