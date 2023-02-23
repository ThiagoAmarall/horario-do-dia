
function carregar(){
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = 'Agora sao ' + hora + 'Horas' + ' é ' +  minuto + 'minutos'

    if(hora >= 0 && hora < 12){
        img.src = './imagens/manhã.jpg'
        document.body.style.background = '#ffe55a'
    }else if(hora >= 12 && hora <18){
        img.src = './imagens/tarde.jpg'
        document.body.style.background = '#d0d3d6'
    }else{
        img.src = './imagens/noite.jpg'
        document.body.style.background = '#302434'
    }
}
