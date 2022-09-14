var input = document.getElementById("valor");
const porc = 5 / 100;


function submit() {
    var numero = input.value;
    
    var resultado = numero * porc;
    console.log(resultado);
};

