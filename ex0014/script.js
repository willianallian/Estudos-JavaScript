function contar(){
var num1 = document.getElementById('txt1')
var num2 = document.getElementById('txt2')
var passo = document.getElementById('txtp')
var res = document.getElementById('res') 

    if(num1.value.length == 0 || num2.value.length == 0 || passo.value.length ==0){

        res.innerHTML = 'impossivél contar'
    }else{
        res.innerHTML = 'contando'
        var i = Number(num1.value)
        var f = Number(num2.value)
        var p = Number(passo.value)
        if(p <=0 ){//digita numero invalido ou negativo considara 1
            window.alert(`Passo invalido considerando 1`)
            p = 1 
        }
        if(i <f){
            //contagem crescente
            for(var c = i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1F603}`
            }
            
        } else{
            //regresiva
            for(let c = 1; c>= f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }   
        res.innerHTML += `\u{1F3C1}`
    }

}
