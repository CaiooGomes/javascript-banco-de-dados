const urldelete = "https://crud-javascript-caio-default-rtdb.firebaseio.com/pessoas/"

function deleteData(id){
    fetch(`${urldelete}${id}.json`,{
        method: 'DELETE',
        headers:{
            'content-Type': 'application/json'
        }
    })
    .then(res=>{
        PegarDados();
    })
    .catch(err=>console.error("Erro ao deletar dado",err))

}