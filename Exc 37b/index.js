var i = ['Aegir', 'Aud', 'Balder'];
var p = document.querySelector("#p")


p.addEventListener('click', () => {
    for(d = 0; d <= i.length; d++ ){
        alert(i[d])
    }
})
    