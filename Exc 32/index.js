const bt = document.querySelector("#alerta")
var chute = document.querySelector("#chute")

bt.addEventListener("click", () => {
    let valor = chute.value
    let numero = Math.floor(Math.random() * 10)


    if(valor == numero){
        alert("Cagada")
        chute.value = ""
        console.log(numero)
    }else{
        alert("70")
        console.log(numero)
        chute.value = ""
    }
})