const container = document.getElementById("resposta");

function teste(){

    for( i = 0; i <= 10; i++){
        var tabela = document.createElement("div");


        for(n = 0; n <= 10; n++){
            var resultado = i*n
            var estrutura = document.createElement("p");
            estrutura.innerHTML = i + "X" + n + "=" + resultado

            tabela.appendChild(estrutura)
            container.appendChild(tabela)

        }
    }
};