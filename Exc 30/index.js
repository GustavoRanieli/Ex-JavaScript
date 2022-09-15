const container = document.getElementById("resultado")

function teste(){
    for( i = 0; i <= 20; i++){
        if((i % 2) == 0){
            var p = document.createElement("p")
            p.innerHTML = i

            container.appendChild(p)
        }
    }
}