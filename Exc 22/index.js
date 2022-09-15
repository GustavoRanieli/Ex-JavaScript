var data = document.getElementById("valor");
var ano = new Date()
var resultado = document.getElementById("idade")

console.log(ano.getFullYear())

function f(){
    let nascimento = data.value;
    let idade = ano.getFullYear() - nascimento;

    
    document.getElementById("idade").innerHTML = Math.abs(idade);
    console.log(Math.abs(idade));
};