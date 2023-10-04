function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()

    var hora = 23

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >=0 && hora <12){
        //dia
        document.body.style.background = '#e2cd9f'
        img.src = 'manha.jpg'
    }else if(hora >= 12 && hora <18){
        //tarde
        document.body.style.background = '#b9846f'
        img.src = 'tarde.jpg'
    }else{
        //noite
        document.body.style.background = '#515154'
        img.src = 'noite.jpg'
    }
}