
export async function nextId(ids){
    let id = 0;
    await while(ids.includes(id)){
	id+=1;
    }
    return id;
}
