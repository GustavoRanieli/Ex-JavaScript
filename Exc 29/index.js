const container = document.getElementById("Resultado")
let i = 0

function teste (){
    for(i; i <= 20; i++){
       let valor =  document.createElement("p")
        valor.innerHTML = i
        container.appendChild(valor)
    }
}