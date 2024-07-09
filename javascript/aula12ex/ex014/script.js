
function carregar(){

var msg = document.querySelector('div#msg')
var img = document.querySelector('img#img')

var data = new Date()
var hora = 19//data.getHours()
msg.innerHTML=`Agora são ${hora} horas`

if (hora >= 0 && hora < 12){
    
    img.src= 'imagens/manha.png'
    document.body.style.background='#EEDFCA'
} else if (hora >= 12 && hora < 18){
    //boa tarde 
    img.src = 'imagens/tarde.png'
    document.body.style.background='#FF9409'
} else {
    //boa noite
    img.src='imagens/noite.png'
    document.body.style.background='#362943'
}

}