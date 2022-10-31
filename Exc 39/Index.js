// Criação e conteudo da Lista
const godsList = document.querySelector("#nomes");
var gods = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Daellingr'];

for( i = 0; i < gods.length; i++){
    let names = document.createElement('li');
    names.innerHTML = gods[i]
    godsList.appendChild(names)
};

// Enviar um novo item para Lista
var topic = document.querySelector( "#topic" );
const button = document.querySelector( "#submit" );

button.addEventListener( 'click', () => {
    var li = topic.value 
    gods.push(li)

        // Envio do novo li
        let names = document.createElement('li');
        names.innerHTML = gods[gods.length - 1]
        godsList.appendChild(names)
});

