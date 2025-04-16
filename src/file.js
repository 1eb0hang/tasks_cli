import { open, mkdir } from 'node:fs/promises';

// import { nextId } from "./util.js";

export async function getTasks(){
    let filehandle;
    try{
	filehandle = await open('./tasksDir/tasks.json', 'r');
    }catch(err){
	await initDir();
	return {};
    }

    let tasks = await filehandle.readFile({encoding:"utf8"});
    await filehandle?.close();
    
    return JSON.parse(tasks);
}

export async function writeTasks(tasks){
    let filehandle = await open('./tasksDir/tasks.json', 'w');
    let res = JSON.stringify(tasks);
    await filehandle.write(res);
    await filehandle?.close();
}


async function initDir(){
    try{
	await mkdir("./tasksDir");
    }catch(err){
	// directory exists
    }finally{
	console.log("creating tasks file");
	await writeTasks(new Object());
    }
}

export async function help(command){
    return "";
}

