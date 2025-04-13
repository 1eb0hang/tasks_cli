import { getTasks, writeTasks} from "./file.js"
import { nextId } from "./util.js"
import { createTask, updateDate, markTaskAs, tasksDisplay } from "./task.js"

const commands = {"add" : addTask,    // add new task 
		  "update" : updateTask, // update task 
		  "delete" : deleteTask, // delete task
		  "mark" : markTask,   // mark task (todo, in-progress, done)
		  "list" : listTasks}   // list tasks (all, done, todo, in-progress)

async function addTask(command){
    /**
     * adds task and adds task record to json file db
     * @param command list containing task description 
     */
    // console.log(command);
    //TODO : error handling for too many args or not enough 
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
    //TODO : error handling for too many args or not enough
    //TODO : error handling for non-existent task index
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
    //TODO : error handling for too many args or not enough
    //TODO : error handling for non-existent task index
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
    // TODO : error handling for too many args or not enough
    // TODO : error handling for wrong status provided
    // TODO : handle mark cycling (todo -> in-progrss -> done -> todo)

    let [status, id] = command; // status can be undefined
    let tasks = await getTasks();
    tasks[String(id)] = markTaskAs(tasks[String(id)], status);
    await writeTasks(tasks);
    console.log(`Task marked as {marker} (ID: ${id})`);
}

async function listTasks(command){
    /**
     * lists existing tasks; list can be filtered according to progress marker 
     * @param command list containg progress marker (optional)
     */
    // TODO : error handling for too many args or not enough
    let [status] = command; // can be undefined
    let tasks = await getTasks();
    let display = tasksDisplay(tasks, status);
    console.log(display);
    console.log(`Tasks ${status==undefined?"":status+" "}listed`);
}

export default function handleCommand(args){
    let command = args[0].trim().toLowerCase();
    if(Object.keys(commands).includes(command)){
	commands[command](args.splice(1));
    }else{
	console.log("Command not found: " + args[0]);
    }
}
