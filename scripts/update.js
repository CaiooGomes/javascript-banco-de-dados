//DIFERENÇA DE PATCH VS PUT
//PATCH MODIFICA APENAS OS ATRIBUTOS ENVIADOS
//PUT MODIFICA O OBJETO INTEIRO

var editMode = document.getElementById("submit").innerHTML === "Edit Aqui!"

function EnviandoDadosAtuais(id,nameitem,emailitem){
    document.getElementById("email").value = emailitem    
    document.getElementById("name").value = emailitem    
}
