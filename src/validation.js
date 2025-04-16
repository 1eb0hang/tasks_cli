import {getTasks} from "./file.js";

let statusOptions = [undefined, "todo", "in-progress","done"];
let ids = [];

let validation = {
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
    }
};

function validOption(_command){
    let [status, id] = _command;
    id = id == undefined?status:id;
    status = id == status?undefined:status;
    return statusOptions.includes(status) &&
	ids.includes(id);
}

export default async function validCommand(_command){
    ids = Object.keys(await getTasks());
    let command = _command[0];
    let validType, validCount;
    let message = "";
    try{
	validType = validation[command].type(_command.slice(1));
	message += !validType?"Error: Argument type mismatch\n":"";
	
	validCount = validation[command].count(_command.slice(1))
	message += !validCount ?"Error: Argument count invalid\n":"";
	
	message += message!=""?"{HELP MESSAGE}\nAborting":"";
	
    }catch(err){
	message = "Something went wrong while validating command: \n"+err.toString();
	return {"isValid":false,"message":message};
	}

    return {"isValid":validType && validCount,
	    "message":message};
}


