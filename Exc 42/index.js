const animate1 = "./img/chara-1.png";
const animate2 = "./img/chara-2.png";
const animate3 = "./img/chara-3.png";
const container = document.querySelector("#container")
var animation = document.querySelector("#animação");


async function anima (){
    console.log(container)
    let move = 
    setTimeout( () => {
        animation.setAttribute('src', animate1)
        container.style.transform = `translateX(${move + "px"})`;
        move++
    }, 1000)

    setTimeout( () => {
        animation.setAttribute('src', animate2)
        container.style.transform = `translateX(${move + "px"})`;
        move++
    }, 2000)

    setTimeout( () => {
        animation.setAttribute('src', animate3)
        container.style.transform = `translateX(${move + "px"})`;
        move++
    }, 3000)
    move = move
    setInterval( anima, 3000)
};
anima();