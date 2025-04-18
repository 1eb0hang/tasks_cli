import {getTasks} from "./file.js";
import getHelp from "./help.js";

let statusOptions = [undefined, "todo", "in-progress","done"];
let ids = [];

let validation = { // validates commands and their arguments
    "add":{
        "type":command=>{return isNaN(Number(command[1]))},
	"count":command=>{return command.length == 1;}
    },
    "update":{
	"type":command=>{return ids.includes(command[0]) && 
			 isNaN(Number(command[1]))} ,
	"count":command=>{return command.length == 2;}
    },
    "delete":{
	"type":command=>{return ids.includes(command[0]);},
	"count":command=>{return command.length == 1;}
    },
    "mark":{
	"type":validOption,
	"count":command=>{return command.length >= 0 && 
			  command.length <=2;}
    },
    "list":{
	"type":command=>{return statusOptions.includes(command[0])},
	"count":command=>{return command.length >= 0 && 
			  command.length <=2;}
    },
    "help":{
	"type":validHelp,
	"count":(command)=>{return command.length >= 0 &&
			    command.length <= 1;} // temp values
    }
};

function validHelp(_command){
    // this function is specifically for "help" validation
    let validCommands =  Object.keys(validation);
    validCommands[validCommands.indexOf("help")] = undefined;
    // console.log(validCommands);
    return validCommands.includes(_command[0]);
}

function validOption(_command){
    // this function is specifically for "mark" validation
    let [status, id] = _command;
    id = id == undefined?status:id;
    status = id == status?undefined:status;
    return statusOptions.includes(status) &&
	ids.includes(id);
}

export default async function validCommand(args){
    // validates arguments passed to command
    ids = Object.keys(await getTasks());
    let command = args[0].trim().toLowerCase();
    let validType, validCount;
    let message = "";
    try{
	validType = validation[command].type(args.slice(1));
	message += !validType?"Error: Argument type mismatch\n":"";
	
	validCount = validation[command].count(args.slice(1))
	message += !validCount ?"Error: Argument count invalid\n":"";

	message += message!=""?`\n${getHelp([undefined])}\nAborting`:"";
	
    }catch(err){
	message = "Something went wrong while validating command: \n"+err.toString();
	return {"isValid":false,"message":message};
    }

    return {"isValid":validType && validCount,
	    "message":message};
}


