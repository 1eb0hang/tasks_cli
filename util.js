
export function nextId(ids){
    let id = 0;
    while(ids.includes(id)){
	id+=1;
    }
    return id;
}
