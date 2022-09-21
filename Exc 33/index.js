const dota = document.querySelector("#dota").innerHTML
const lol = document.querySelector("#lol").innerHTML

if( dota.includes('Dota')){
    console.log(dota + " deu certo")
}else{
    console.log("Bom teste")
}

if(lol.includes('LOL')){
    console.log("LOL")
}else{
    console.log("Teste")
}