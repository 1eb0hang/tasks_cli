
export function createTask(id, description){
    //creates new task
    return {
	"id":id,
	"description": description,
	"status":"todo",
	"createdAt": `${new Date(Date.now()).toISOString()}`,
	"updatedAt":`${new Date(Date.now()).toISOString()}`
    }
}

export function updateDate(task){
    // updates task description and timestamp
    let res = task;
    res.updatedAt = `${new Date(Date.now()).toISOString()}`;
    return res;
}

export function markTaskAs(task, status){
    // marks as status specified, or cycle to  next status
    // todo => in-progress => done => todo
    let res = task;
    if(status!=undefined){
	res.status = status.trim().toLowerCase();
    }else{
	let cycle = ["todo", "in-progress", "done"];
	let newStatus = cycle[cycle.indexOf(res.status)+1]
	newStatus = newStatus == undefined?cycle[0]:newStatus;
	res["status"]=newStatus;
    }
    return res;
}

export function tasksDisplay(taskList, status = undefined){
    // lists tasks or informs that no tasks exist
    let res = [];
    if(status == undefined){
	for(let task in taskList){
	    res.push(taskFormat(taskList[task]));
	}
    }else{
    	for(let task in taskList){
	    if(taskList[task].status == status){
		res.push(taskFormat(taskList[task])); // should probaly use some kind of filter function
	    }
	}
    }
    return res.length>0?res.join(""):`No ${status==undefined?"":status+" "}tasks found`;
}

function taskFormat(task){
    return `${task.id}) - ${task.description}\n\t${task.status} - ${task.createdAt} - ${task.updatedAt}\n--------------------------\n`;
}

// function dateFormat(dateISO){
    
// }

