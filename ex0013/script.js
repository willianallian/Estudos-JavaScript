function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(' ERRO ')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homen'
            if(idade >=0 && idade <10){
                //crinça
                img.setAttribute('src', 'menino.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'garoto.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'homen-adulto.jpg')
            }else{
                //velho
                img.setAttribute('src', 'homen-velho.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <10){
                //crinça
                img.setAttribute('src', 'menina.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'garota.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            }else{
                //velho
                img.setAttribute('src', 'mulher-velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)//mostra imagem na div resposta
    }
}