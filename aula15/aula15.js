let num = [5,8,2,9,3]//vetor de 0 a 5

num.sort() //ordena em crescente

console.log(`nosso vetor ${num}`)

console.log(`o vetor ${num.length} posições`)// .length mostra os elementos do vetor

num.push(1)//adiciona um valor no final do vetor

console.log(num)

let pos = num.indexOf(8)//pesquisa o valor r retoran a posição ATEMÇAO retora -1 caso não localiza
console.log(`o valor 8 esta na posição ${pos}`)
