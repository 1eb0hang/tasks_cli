# Tasks_cli

Tool that tracks tasks, and allows you to mark them as "todo", "in-progress' or "done"\
It is a cli tool

## Requirements
- nodejs v23

**WARNING** : This application has only been tested on windows and linux through MSYS2

## Installation



**Example**

```shell
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark 1
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
- [ ] add tests
- [ ] add shell script (linux & windows) to run applcation
- [x] finish validation
- [ ] finish documentation
- [ ] refactor

### Project page URL

Go [here](https://roadmap.sh/projects/task-tracker)
