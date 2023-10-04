let valores = [8,1,7,4,2,9]

console.log(valores)

/*for(let pos=0; pos< valores.length;pos++){//percuros para exibiçaõ de vetor
    console.log(`a posição ${pos} tem ${valores[pos]}`)
}*/

for(let pos in valores){// for in serve para objetos e vetores 
    console.log(`a posição ${pos} tem ${valores[pos]}`)
}