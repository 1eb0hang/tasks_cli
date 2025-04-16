
export async function nextId(ids){
    return new Promise((resolve)=>{
	let id = 1;
	while(ids.includes(String(id))){
	    id+=1;
	}
	resolve(id);
    });
}
