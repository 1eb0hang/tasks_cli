
let validation = {
    "add":{
        "type":command=>{return typeof command[0] === 'string';},
	"count":command=>{return command.length == 1;}
    },
    "update":{
	"type":(command, ids)=>{return ids.includes(command[0]) && 
				typeof command[1] === 'string';} ,
	"count":command=>{return command.length == 2;}
    },
    "delete":{
	"type":(command, ids)=>{return ids.includes(command[0]);},
	"count":(command)=>{return command.length == 1;}
    },
    "mark":{
	"type":validOption,
	"count":(command)=>{return command.length >= 0 && 
			    command.length <=2;}
    },
    "list":{
	"type":validOption,
	"count":(command)=>{return command.length >= 0 && 
			    command.length <=2;}
    }
};

function validOption(command, name){
    let res = {}
    if(name == "mark"){
	// mark todo 1       
	// mark in-progress 1
	// mark done 1       
    }else{
	// list
	// list todo
	// list in-progress
	// list done
    }
    return false;
}

function validCommand(command){}
// add - 1 arg (string)
// update - 2 args (int string)
// delete - 1 arg (int)
// mark - 1 min, 2 max (string int)
// list - 1 max (string)


