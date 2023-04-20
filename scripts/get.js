const url ="https://crud-javascript-caio-default-rtdb.firebaseio.com/pessoas.json"

async function PegarDados(){
    const resultado = await fetch(url);
    const resultadoConvertido = await resultado.json();
    // const array = Object.values(resultadoConvertido);
    const arr = Object.entries(resultadoConvertido).map(([id,values])=>({id,...values}))
    // console.log(resultadoConvertido);
    // console.log(array);
    // console.log(arr);

    function gerarTableRows(array){
        return array.map((item,index)=> `
            <tr>
                <td>${index}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.id}</td>
                <td onclick="EnviandoDadosAtuais('${item.id}', '${item.email}', '${item.name}')"><button>Editar</button></td>
                <td><button onclick="deleteData('${item.id}')">Deletar</button></td>
            </tr>
        `).join('');
    }

    const tableBody = document.getElementById("tbody");
    tableBody.innerHTML = gerarTableRows(arr);
    // tableBody.innerHTML = "<p>Vim pelo javascript</p>"

}
PegarDados();