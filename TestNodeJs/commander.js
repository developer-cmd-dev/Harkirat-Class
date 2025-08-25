import { Command } from "commander";
import fs, { chownSync } from "fs";
import path from "path";
let string = "";
const files = fs.promises



async function getCount(filePath) {
    try {
        string = await files.readFile(filePath, "utf-8")
        console.log(`You have ${string.split(" ").length} words in this file.` )
    } catch (error) {
        console.log(error.message)
    }

}

getCount()

const program = new Command();
program.name("Count words")
    .description("This cli can count the words in sentences")
    .version("0.0.1")

program.command("countwords")
    .description("this can cout the word of given file")
    .argument("<file>")
    .action((options) => {
       getCount(options)
    })

program.parse();
