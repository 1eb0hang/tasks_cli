
export function createTask(id, description){
    return {
	"id":id,
	"description": description,
	"status":"todo",
	"createdAt": `${new Date(Date.now()).toISOString()}`,
	"updatedAt":`${new Date(Date.now()).toISOString()}`
    }
}

export function updateDate(task){
    let res = task;
    res.updatedAt = `${new Date(Date.now()).toISOString()}`;
    return res;
}

export function markTaskAs(task, status){
    let res = task;
    if(status!=undefined){
	res.status = status.trim().toLowerCase();
    }else{
	let cycle = ["todo", "in-progress", "done"];
	let newStatus = cycle[cycle.indexOf(res.status)+1]
	newStatus = newStatus == undefined?cycle[0]:newStatus;
	res["status"]=newStatus;
	//console.log(newStatus);
    }
    //console.log(res);
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

// function dateFormat(dateISO){
    
// }

