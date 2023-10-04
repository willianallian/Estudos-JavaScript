let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []



function isNumero(n){//valida o numero digitado
    if(Number(n) >= 1 && Number(n) <=100){
        return true//não mostra em tela confima se valido o numero
    }else{
        return false
    }
}
function inLista(n, lista){
    if(lista.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))//pegando o valor do input .push
        let item = document.createElement('option')//dinamicamente
        item.text = `valores ${num.value} adicionado `
        lista.appendChild(item)
        res.innerHTML = '' //limpa valor depois de add
    }else{
        alert('valor invalido')
    }
    //limpa o select
    num.value = ''
    num.focus()//libera o mouse

}

function finalizar(){
    if(valores.lenght == 0){
        alert('informe um número')
    }else{
        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){//percorre o vetor
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
            
        }
        //calcula media como sabemos a soma e o total
        media = soma / tot
        res.innerHTML = '' 
        res.innerHTML += `<p> ao todo, temos ${tot} número cadastrados</p>`
        res.innerHTML += `<p>o menor valor ${menor}</p>`
        res.innerHTML += `<p>o maior valor ${maior}</p>`
        res.innerHTML += `<p>a soma dos valores ${soma}</p>`
        res.innerHTML += `<p> media e ${media}</p>`
    }
}