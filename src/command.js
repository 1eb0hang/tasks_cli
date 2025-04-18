import { getTasks, writeTasks} from "./file.js";
import { nextId } from "./util.js";
import { createTask, updateDate, markTaskAs, tasksDisplay } from "./task.js";
import getHelp from "./help.js"
import validCommand from "./validation.js";

const commands = {"add"    : addTask,       
		  "update" : updateTask, 
		  "delete" : deleteTask, 
		  "mark"   : markTask,     
		  "list"   : listTasks,
		  "help"   : help};

async function addTask(command){
    /**
     * adds task and adds task record to json file db
     * @param command list containing task description 
     */
    let [description] = command;
    let tasks = await getTasks();
    let newId = await nextId(Object.keys(tasks));
    tasks[String(newId)] = createTask(newId, description);
    await writeTasks(tasks);
    console.log(`Task added (ID: ${newId})`);
}

async function updateTask(command){
    /**
     * updates existing task by id
     * Should be something like `task update 1 "Buy groceries"`
     * @param command list containg  task id and new description
     */
    let [id, description] = command;
    let tasks = await getTasks();
    tasks[String(id)] = createTask(id, description);
    tasks[String(id)] = updateDate(tasks[String(id)]);
    await writeTasks(tasks);
    console.log(`Task updated (ID: ${id})`);
}

async function deleteTask(command){
    /**
     * deletes existing task by id
     * @param command list containg task id
     */
    let [id] = command;
    let tasks = await getTasks();
    delete tasks[String(id)];
    await writeTasks(tasks);
    console.log(`Task deleted (ID: ${id})`);
}

async function markTask(command){
    /**
     * marks existing task by id as either todo, in-progress or done
     * @param command list containg  task id and new progress marker(optional)
     */
    // TODO : handle mark cycling (todo -> in-progrss -> done -> todo)

    let [status, id] = command; // status can be undefined
    id = id == undefined?status:id;
    status = id == status?undefined:status;
    let tasks = await getTasks();
    tasks[String(id)] = markTaskAs(tasks[String(id)], status);
    await writeTasks(tasks);
    console.log(`Task marked as ${tasks[String(id)].status} (ID: ${id})`);
}

async function listTasks(command){
    /**
     * lists existing tasks; list can be filtered according to progress marker 
     * @param command list containg progress marker (optional)
     */
    let [status] = command; // can be undefined
    let tasks = await getTasks();
    let display = tasksDisplay(tasks, status);
    console.log(display);
    console.log(`Tasks ${status==undefined?"":status+" "}listed`);
}

async function help(command){
    /**
     * prints help message
     * different message depending on its arguments
     * @param command 
     */
    console.log(getHelp(command));
}

export default async function handleCommand(args){
    let command = args[0].trim().toLowerCase();
    let commandExists = await Object.keys(commands).includes(command)
    
    if(!commandExists){
	console.log("Command not found: " + command);
	return;
    }

    let validation = await validCommand(args); //{isValid, message}
    if(!validation.isValid){
	console.log(validation.message);
	return;
    }
    
    commands[command](args.slice(1))
}
