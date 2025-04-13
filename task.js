
export function createTask(id, description){
    return {
	"id":id,
	"description": description,
	"status":"todo",
	"createdAt":"...",
	"updatedAt":"..."
    }
}

export function updateDate(task){
    let res = task;
    res.updatedAt = "...";
    return res;
}

export function markTaskAs(task, marker){
    let res = task;
    res.status = marker;
    return res;
}

//TODO: add createdAt var with some date time function

// - id - unique identifier for task
// - descriptiton - short description of task 
// - status - status of task 
// - createdAt - creation date and time of task 
// - updatedAt - last modification date and time of task
