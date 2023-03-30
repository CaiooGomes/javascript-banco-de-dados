// dois tipos de funcões 
//função normal
function a (){
    //tarefa que a funcção vai fazer
}

//arrow function porque tem uma seta
const b =()=>{
    //tarefa que a funcção vai fazer
}

//parametros da função
function Somar (num1,num2){
    let soma = num1+num2;
    console.log(`o resultado é ${soma} !`)
}
//função sem parametro
const DiaHoje=()=>{
    data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    console.log(`dia ${dia} do mês ${mes}`)
}
//chamando as funções 
somar(12,13)
DiaHoje()