
const help = 
      "tasks [command] [options]\n"+
      "\n"+
      "Commands:\n"+
      "    add    - adds new task\n"+
      "    update - updates existing task\n"+
      "    delete - delete existing task\n"+
      "    mark   - changes task status\n"+
      "    list   - lists tasks\n"+
      "\n"+
      "Run \"tasks help [command]\" for more information";

const helpAdd = 
      "tasks add [description]\n"+
      "\n"+
      "Adds new task and assigns id to task that is\n"+
      "referencable later\n";

const helpUpdate = 
      "tasks update [id] [description]\n"+
      "\n"+
      "Updates task description by id\n";

const helpDelete = 
      "tasks delete [id]\n"+
      "\n"+
      "Deletes task specified by id\n";

const helpMark = 
      "tasks mark [id]\n"+
      "tasks mark [status] [id]\n"+
      "\n"+
      "Updates task status specified by id\n"+
      "Marking tasks without specifying new status\n"+
      "cycles status:\n"+
      "    todo => in-progress=>done=>todo\n";

const helpList = 
      "tasks list\n"+
      "tasks list [status]\n"+
      "\n"+
      "Lists all tasks or lists tasks by status\n";

const helpMessage = {
    undefined : help,
    "add"     : helpAdd,
    "update"  : helpUpdate,
    "delete"  : helpDelete,
    "mark"    : helpMark,
    "list"    : helpList
};

export default function getHelp(command){
    return helpMessage[command[0]];
}
