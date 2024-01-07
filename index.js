import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please enter your name!"
});
console.log(player.name);
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "please select your opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
console.log(opponent.select);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: "What You can Do?",
            choices: ["Attack", "Drink", "Run for Life"]
        });
        if (ask.options == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(chalk.bold.red `(${p1.name} fuel is ${p1.fuel})`);
                console.log(chalk.bold.green `(${o1.name} fuel is ${o1.fuel})`);
                if (p1.fuel == 0) {
                    console.log(chalk.bold.red.italic("You loose!"));
                    process.exit();
                }
            }
            if (num == 0) {
                o1.fueldecrease();
                console.log(chalk.bold.red `(${o1.name} fuel is ${o1.fuel})`);
                console.log(chalk.bold.green `(${p1.name} fuel is ${p1.fuel})`);
                if (o1.fuel == 0) {
                    console.log(chalk.bold.red.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.options == "Drink") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green `(after Drik Your Health is ${p1.fuel})`);
        }
        if (ask.options == "Run for Life") {
            console.log(chalk.bold.red.italic("You loose"));
            process.exit();
        }
    }
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: "What You can Do?",
            choices: ["Attack", "Drink", "Run for Life"]
        });
        if (ask.options == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(chalk.bold.red `(${p1.name} fuel is ${p1.fuel})`);
                console.log(chalk.bold.green `(${o1.name} fuel is ${o1.fuel})`);
                if (p1.fuel == 0) {
                    console.log(chalk.bold.red.italic("You loose!"));
                    process.exit();
                }
            }
            if (num == 0) {
                o1.fueldecrease();
                console.log(chalk.bold.red `(${o1.name} fuel is ${o1.fuel})`);
                console.log(chalk.bold.green `(${p1.name} fuel is ${p1.fuel})`);
                if (o1.fuel == 0) {
                    console.log(chalk.bold.red.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.options == "Drink") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green `(after Drik Your Health is ${p1.fuel})`);
        }
        if (ask.options == "Run for Life") {
            console.log(chalk.bold.red.italic("You loose"));
            process.exit();
        }
    }
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: "What You can Do?",
            choices: ["Attack", "Drink", "Run for Life"]
        });
        if (ask.options == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(chalk.bold.red `(${p1.name} fuel is ${p1.fuel})`);
                console.log(chalk.bold.green `(${o1.name} fuel is ${o1.fuel})`);
                if (p1.fuel == 0) {
                    console.log(chalk.bold.red.italic("You loose!"));
                    process.exit();
                }
            }
            if (num == 0) {
                o1.fueldecrease();
                console.log(chalk.bold.red `(${o1.name} fuel is ${o1.fuel})`);
                console.log(chalk.bold.green `(${p1.name} fuel is ${p1.fuel})`);
                if (o1.fuel == 0) {
                    console.log(chalk.bold.red.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.options == "Drink") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green `(after Drik Your Health is ${p1.fuel})`);
        }
        if (ask.options == "Run for Life") {
            console.log(chalk.bold.red.italic("You loose"));
            process.exit();
        }
    }
} while (true);
