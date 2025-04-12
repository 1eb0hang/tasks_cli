import { open } from 'node:fs/promises';

// import { nextId } from "./util.js";

async function getTasks(){
    let filehandle = await open('./tasks/tasks.json', 'r');
    let tasks = await filehandle.readFile({encoding:"utf8"});
    await filehandle?.close();
    
    return JSON.parse(tasks);
}

async function writeTasks(tasks){
    let filehandle = await open('./tasks/tasks.json', 'w');
    let res = JSON.stringify(tasks);
    await filehandle.write(res);
    await filehandle?.close();
}

// let val = await getTasks();
writeTasks(
{
    "1": {
	"id":1,
	"description":"Eat lunch",
	"status": "todo",
	"createdAt": "...",
	"updatedAt": "..."
    },

    "2":{
	"id":2,
	"description":"New task added",
	"status":"done",
	"createdAt":"...",
	"updatedAt":"..."
    }
}
)
