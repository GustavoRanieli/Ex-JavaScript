var deuses = ['Aegir', 'Aud', 'Balder']
const paragraph = document.querySelector('#Lugar')
const button = document.querySelector('#enviar')

paragraph.innerHTML = deuses

button.addEventListener('click', () => {
    deuses.push('Loki', 'Odin', 'Frey')
    paragraph.innerHTML = deuses

})