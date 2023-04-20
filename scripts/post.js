function sendData(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const data ={
        name: name,
        email: email
    }
    // fetch(url, {argumento})
    // metodos
    // POST envia os dados
    // GET recebe os dados
    // DELETE deleta os dados
    // PUT substitui todo o objeto
    // PATCH ele substitui só os argumentos recebidos
    fetch("https://crud-javascript-caio-default-rtdb.firebaseio.com/pessoas.json", {
    method: "POST",
    headers:{
        'Content-Type': 'aplicattion/json'
    },
    body: JSON.stringify(data)
    })

    .then(resposta => resposta.json())
    .then(data=>{
        console.log(data)
        PegarDados()
    })
    .catch(erro=>console.error(erro))
}