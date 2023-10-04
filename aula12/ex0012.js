var idade = 22
console.log('sua idade e ', + idade)
if(idade <22){
    console.log('não vota')
}else if(idade <18 || idade > 65){
    console.log('voto opcional')
}else{
    console.log('voto obrigatorio')
}