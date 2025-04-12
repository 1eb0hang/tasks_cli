
export function createTask(id, description){
    return {
	"id":id,
	"description": description,
	"status":"todo",
	"createdAt":"...",
	"updatedAt":"..."
    }
}

// - id - unique identifier for task
// - descriptiton - short description of task 
// - status - status of task 
// - createdAt - creation date and time of task 
// - updatedAt - last modification date and time of task
