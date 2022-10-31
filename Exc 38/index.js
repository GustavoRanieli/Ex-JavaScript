const godsList = document.querySelector("#nomes");
var gods = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Daellingr'];

for(i = 0; i < gods.length; i++){
    var names = document.createElement('li');
    names.innerHTML = gods[i]
    godsList.appendChild(names)
}



