function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
       
        alert('Digite um número por favor!')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''//limpa a area select
        for(var c =1; c<=10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}