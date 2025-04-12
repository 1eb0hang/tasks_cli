import { open } from 'node:fs/promises';


async function getTasks(){
    let filehandle = await open('./tasks/tasks.json', 'r');
    let tasks = await filehandle.readFile({encoding:"utf8"})
    console.log(tasks)
    await filehandle?.close();
    
    return tasks;
}

getTasks();
