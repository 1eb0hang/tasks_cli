import process from "node:process";
import * as fs from "node:fs"

const commands = {"add" : addTask,    // add new task 
		  "update" : updateTask, // update task 
		  "delete" : deleteTask, // delete task
		  "mark" : markTask,   // mark task (todo, in-progress, done)
		  "list" : listTasks}   // list tasks (all, done, todo, im-progress)

let args = process.argv.splice(2);

function addTask(command){
    console.log("added task: " + command[0])
}

function updateTask(command){
    console.log("updated task: " + command[0])
}

function deleteTask(command){
    console.log("deleted task: " + command[0])
}

function markTask(command){
    console.log("marked task: " + command[0])
}

function listTasks(command){
    console.log("listing tasks: " + command[0])
}

function handleCommand(args){
    let command = args[0].trim().toLowerCase();
    if(Object.keys(commands).includes(command)){
	commands[args[0]](["hello world"]);
    }else{
	console.log("Command not found: " + args[0]);
    }
}

handleCommand(args)
