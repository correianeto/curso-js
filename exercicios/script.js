function clicar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var hora = new Date()
var horas = 13 //hora.getHours()
msg.innerHTML = `Agora são ${horas} horas.`

if (horas >= 0 && horas < 12) {
    document.body.style.background = '#f3e06f'
    img.scr = 'imagens/manha.png'
} else if (horas <= 18) {
    document.body.style.background = '#e0651d'
    img.scr = "imagens/tarde.png";
} else {
    document.body.style.backgroundColor = '#2b464d'
    img.scr = 'imagens/noite.png'
}
}