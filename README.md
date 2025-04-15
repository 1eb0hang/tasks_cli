# Tasks_cli

Project that tracks tasks\
It is a cli tool

## Requirements

- should ber commandline tool 
- accept user action and input as command line arguments
- users actions:
	- add, update and delete tasks
	- mark tasks as in progress or done
	- list all tasks 
		- list all done tasks 
		- list all not done tasks
		- list all in progress tasks 

**Constraints**
- use any proraming language
- Use positional arguments in commandline to accept \
user input
- use a json file to store the tasks in the current directory
	- json should be created is not exist
	- use native file system module in chosen programming language

- ensure to handle errors and edge case gracfully
- **do not use any external libraries or frameworks**


**Example**

```shell
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark
task-cli mark todo 1
task-cli mark in-progress 1
task-cli mark done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```

**TODO**
- [ ] add tests with jest framework

### Project page URL

Go [here](https://roadmap.sh/projects/task-tracker)
