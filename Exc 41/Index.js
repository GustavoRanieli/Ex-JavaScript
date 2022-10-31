const contador = document.querySelector("#contagem")
var contagem = 5


setInterval( () => {
        contador.innerHTML = contagem--
            if (contagem <= 0){
                contagem = 0
            }
}, 1000)
