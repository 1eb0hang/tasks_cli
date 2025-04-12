import { getTasks, writeTasks} from "./file.js"
import { nextId } from "./util.js"
import { createTask } from "./task.js"

const commands = {"add" : addTask,    // add new task 
		  "update" : updateTask, // update task 
		  "delete" : deleteTask, // delete task
		  "mark" : markTask,   // mark task (todo, in-progress, done)
		  "list" : listTasks}   // list tasks (all, done, todo, in-progress)o

async function addTask(command){
    /**
     * adds task and adds task record to json file db
     * @param command list containing task description 
     */
    console.log(command);
    let tasks = await getTasks();
    let newId = await nextId(Object.keys(tasks));
    tasks[String(newId)] = createTask(newId, command[0]);
    console.log(tasks);
    console.log(`Task successfully added (ID: ${newId})`)
}

function updateTask(command){
    /**
     * updates existing task
     * @param command list containg  task id and new description
     */
    console.log("updated task: " + command[0])
}

function deleteTask(command){
    /**
     * deletes existing task
     * @param command list containg task id
     */
    console.log("deleted task: " + command[0])
}

function markTask(command){
    /**
     * marks existing task as either todo, in-progress or done
     * @param command list containg  task id and new progress marker(optional)
     */
    console.log("marked task: " + command[0])
}

function listTasks(command){
    /**
     * lists existing tasks; list can be filtered according to progress marker 
     * @param command list containg progress marker (optional)
     */
    console.log("listing tasks: " + command[0])
}

export default function handleCommand(args){
    let command = args[0].trim().toLowerCase();
    if(Object.keys(commands).includes(command)){
	commands[command](args.splice(1));
    }else{
	console.log("Command not found: " + args[0]);
    }
}
