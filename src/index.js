import process from "node:process";
import handleCommand from "./command.js"

let args = process.argv.splice(2);
handleCommand(args)
