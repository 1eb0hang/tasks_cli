
export function createTask(id, description){
    return {
	"id":id,
	"description": description,
	"status":"todo",
	"createdAt": `${new Date(Date.now())}`,
	"updatedAt":`${new Date(Date.now())}`
    }
}

export function updateDate(task){
    let res = task;
    res.updatedAt = `${new Date(Date.now())}`;
    return res;
}

export function markTaskAs(task, marker){
    let res = task;
    res.status = marker;
    return res;
}

export function tasksDisplay(taskList, status = undefined){
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


//TODO: add createdAt var with some date time function

// - id - unique identifier for task
// - descriptiton - short description of task 
// - status - status of task 
// - createdAt - creation date and time of task 
// - updatedAt - last modification date and time of task
