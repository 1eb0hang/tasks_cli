# Tasks_cli

Tool that tracks tasks, and allows you to mark them as "todo", "in-progress' or "done"\
It is a cli tool

### Project page URL

Solution to the [task-tracker](https://roadmap.sh/projects/task-tracker) from [roadmap.sh](https://roadmap.sh/)


### Requirements
- nodejs v23
  (Make sure that it is included in Path variable)
  
**WARNING** : This application has only been tested on Windows through MSYS2

### Installation

#### Clone the Repository
```shell
git clone https://github.com/1eb0hang/tasks_cli.git
```

#### Make Scripts runnable (Linux)
Make the script runnable:

```shell
sudo chmod +x tasks
```

The following are valid commands within the program
```shell
# Adding a new task
tasks add "Sweep the roof"

# Updating and deleting tasks
tasks update 1 "Actually dont sweep the roof"
tasks delete 1

# Marking a task as in progress or done
tasks mark 1
tasks mark todo 1
tasks mark in-progress 1
tasks mark done 1

# Listing all tasks
tasks list

# Listing tasks by status
tasks list done
tasks list todo
tasks list in-progress
```

Also type `tasks help` for reference from program
