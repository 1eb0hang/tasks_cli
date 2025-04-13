import process from "node:process";
//import * as fs from "node:fs"
import handleCommand from "./command.js"

let args = process.argv.splice(2);
handleCommand(args)
