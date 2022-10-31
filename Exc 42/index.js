const animate1 = "./img/chara-1.png"
const animate2 = "./img/chara-2.png"
const animate3 = "./img/chara-3.png"
var animation = document.querySelector("#animação")


async function anima (){
    setTimeout( () => {
        animation.setAttribute('src', animate1)
    }, 1000)

    setTimeout( () => {
        animation.setAttribute('src', animate2)
    }, 2000)

    setTimeout( () => {
        animation.setAttribute('src', animate3)
    }, 3000)
    

    setInterval( anima, 3000)
    console.log(animation)
}
anima()